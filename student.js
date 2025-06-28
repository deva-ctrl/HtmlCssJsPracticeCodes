// 🧑‍🎓 Students Class
class Students {
	constructor(element) {
		this.studentForm = element;
		let self = this;
		self.convertToAJAX();
	}

	// ➕ Add Student using AJAX
	addStudent(form) {
		let self = this;
		form.addEventListener("submit", async (e) => {
			e.preventDefault();
			e.stopPropagation();

			const formData = new FormData(form);
			const Data = Object.fromEntries(formData.entries());

			// ⚠️ Validate fields
			if (
				Data.name === "" || Data.age === "" || Data.gender === "" ||
				Data.college === "" || Data.batch === "" ||
				Data.dsa === "" || Data.react === "" || Data.webd === ""
			) {
				return self.notify("Please enter all the details 🤷‍♂️", "error");
			}

			// 🚀 Send AJAX POST
			const response = await fetch("/students/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Data),
			});

			const data = await response.json();

			if (data.status === "error") return self.notify(data.message, "error");

			form.reset();
			self.notify(data.message, "success");

			let accordion = self.createStudentInDOM(data.student);
			let deleteBtn = accordion.querySelector(".delete-student-button");

			self.addToSelection(data.student);
			self.toggleAccordion(accordion);
			self.deleteStudent(deleteBtn);
		});
	}

	// 🧾 Populate interview dropdowns
	addToSelection(student) {
		let items = document.querySelectorAll(".interview-accordion-item");
		items.forEach((item) => {
			let selects = item.querySelectorAll(".form-group select");
			selects.forEach((select) => {
				if (select.name === "name") {
					let option = document.createElement("option");
					option.value = student.id;
					option.textContent = student.name;
					select.appendChild(option);
				}
			});
		});
	}

	// 🛠️ Build student accordion in DOM
	createStudentInDOM(student) {
		let template = document.querySelectorAll("template")[0];
		let clone = template.content.cloneNode(true);
		let accordion = clone.querySelector(".student-accordion-item");

		accordion.classList.add(`accordion-item-${student.id}`);
		let h2 = accordion.querySelector(".accordion-header");
		h2.id = `student-heading-${student.id}`;

		let button = accordion.querySelector(".accordion-button");
		button.textContent = student.name;
		button.setAttribute("data-bs-target", `#student-${student.id}`);
		button.setAttribute("aria-controls", `student-${student.id}`);

		if (student.gender === "male") button.textContent += " 👦";
		if (student.gender === "female") button.textContent += " 👧";

		let body = accordion.querySelector(".accordion-collapse");
		body.id = `student-${student.id}`;
		body.setAttribute("aria-labelledby", `student-heading-${student.id}`);

		body.querySelector("img").src = student.avatar;
		body.querySelector("img").alt = student.name;

		let p = body.querySelectorAll(".student-data p");
		p[0].querySelector("span").textContent = student.id;
		p[1].querySelector("span").textContent = student.name;
		p[2].querySelector("span").textContent = student.age;
		p[3].querySelector("span").textContent = student.gender;
		p[4].querySelector("span").textContent = student.college;
		p[5].querySelector("span").textContent = student.batch;
		p[6].querySelector("span").textContent = student.status;
		p[7].querySelector("span").textContent = student.dsa;
		p[8].querySelector("span").textContent = student.react;
		p[9].querySelector("span").textContent = student.webd;

		body.querySelector(".delete-student-button").setAttribute("data-id", student.id);

		document.getElementById("students").appendChild(accordion);
		return accordion;
	}

	// 🗑️ Delete student's interviews
	deleteInterviews({ students, companies, interviewIDs, studentID }) {
		let self = this;
		if (companies.length === 0) return;

		companies.forEach((company) => {
			let COMPANY = document.querySelector(
				`.interview-accordion-item.accordion-item-${company._id}`
			);

			if (COMPANY) {
				if (students.length === 0) {
					let STUDENT = COMPANY.querySelectorAll(".student");
					STUDENT.forEach((item) => item.remove());
				} else {
					interviewIDs.forEach((id) => {
						let STUDENT = COMPANY.querySelector(`.student-interview-${id}`);
						if (STUDENT) STUDENT.remove();
					});

					let selects = COMPANY.querySelectorAll(".form-group select");
					selects.forEach((select) => {
						let opts = select.querySelectorAll("option");
						opts.forEach((opt) => {
							if (opt.value === studentID) opt.remove();
						});
					});
				}
			}
		});
	}

	// ❌ Delete student entry
	deleteStudent(btn) {
		let self = this;
		btn.addEventListener("click", async (e) => {
			e.preventDefault();
			e.stopPropagation();

			const id = e.target.getAttribute("data-id");

			const response = await fetch(`/students/delete/${id}`, {
				method: "DELETE",
			});
			const data = await response.json();

			if (data.status === "error") return self.notify(data.message, "error");

			self.notify(data.message, "success");
			self.deleteInterviews(data);

			e.target.closest(".student-accordion-item").remove();
		});
	}

	// 🔽 Accordion toggler
	toggleAccordion(accordion) {
		const collapse = accordion.querySelectorAll(".accordion-collapse");
		collapse.forEach((item) => {
			const ele = item.previousElementSibling;
			ele.children[0].addEventListener("click", (e) => {
				e.preventDefault();
				e.stopPropagation();

				if (e.target.getAttribute("aria-expanded") === "true") {
					ele.classList.add("round");
					e.target.classList.add("round");
				} else {
					ele.classList.remove("round");
					e.target.classList.remove("round");
				}
			});
		});
	}

	// 🔔 Notifications using Noty
	notify(message, type) {
		new Noty({
			theme: type === "success" ? "relax" : "sunset",
			text: message,
			type: type,
			layout: "topRight",
			progressBar: true,
			closeWith: ["click", "button"],
			timeout: 6000,
		}).show();
	}

	// 🔁 Init all students on page load
	convertToAJAX() {
		let self = this;
		let accordion = document.querySelectorAll(".student-accordion-item");

		accordion.forEach((item) => {
			let deleteBtn = item.querySelector(".delete-student-button");
			self.toggleAccordion(item);
			self.deleteStudent(deleteBtn);
		});

		self.addStudent(self.studentForm);
	}
}

// 🚀 Run on page load
{
	try {
		const studentForm = document.getElementsByClassName("student-form");
		Array.from(studentForm).forEach((item) => {
			new Students(item);
		});
	} catch (e) {
		console.error(e);
	}
}
