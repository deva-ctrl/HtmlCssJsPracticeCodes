class StudentsList {
	constructor() {
		this.studentsList = document.querySelector("#students-list");
		this.interviewDiv = document.querySelector("#interview-slots");
		this.addStudentButton = document.querySelector("#add-student");
		this.csrfToken = document.querySelector("meta[name='csrf-token']")?.content;

		this.init();
	}

	init() {
		this.setupAddStudent();
		this.setupEditButtons();
		this.setupDeleteButtons();
		this.setupResultSelectors();
	}

	setupAddStudent() {
		this.addStudentButton?.addEventListener("click", () => {
			const form = document.querySelector("#new-student-form");
			const url = form.getAttribute("action");
			const self = this;

			form.onsubmit = async function (e) {
				e.preventDefault();
				const formData = new FormData(form);

				try {
					const response = await fetch(url, {
						method: "POST",
						headers: {
							"X-CSRF-Token": self.csrfToken,
						},
						body: formData,
					});
					const data = await response.json();

					if (data.status === "success") {
						self.notify(data.message, "success");
						form.reset();
						self.studentsList.insertAdjacentHTML("beforeend", self.newStudentDom(data.data));
						self.attachNewStudentEvents();
					} else {
						self.notify(data.message, "error");
					}
				} catch (err) {
					console.error("Add student error:", err);
					self.notify("Network error. Please try again.", "error");
				}
			};
		});
	}

	newStudentDom(student) {
		return `
      <li id="student-${student._id}">
        <strong>${student.name}</strong> | Email: ${student.email} | College: ${student.college}
        <br>DSA: ${student.dsaScore}, WebD: ${student.webdScore}, React: ${student.reactScore}
        <button class="edit-student btn btn-sm btn-warning" data-id="${student._id}"><i class="fas fa-edit"></i></button>
        <button class="delete-student btn btn-sm btn-danger" data-id="${student._id}"><i class="fas fa-trash"></i></button>
        <br>
        <select class="student-result" data-id="${student._id}">
          <option value="PASS">PASS</option>
          <option value="FAIL">FAIL</option>
          <option value="ON_HOLD">ON HOLD</option>
        </select>
      </li>`;
	}

	attachNewStudentEvents() {
		this.setupEditButtons();
		this.setupDeleteButtons();
		this.setupResultSelectors();
	}

	setupEditButtons() {
		document.querySelectorAll(".edit-student").forEach((btn) => {
			btn.onclick = async () => {
				const id = btn.getAttribute("data-id");
				const response = await fetch(`/students/${id}/edit`);
				const data = await response.json();

				if (data.status === "success") {
					const form = document.querySelector("#edit-student-form");
					const student = data.data;

					form.name.value = student.name;
					form.email.value = student.email;
					form.college.value = student.college;
					form.dsaScore.value = student.dsaScore;
					form.webdScore.value = student.webdScore;
					form.reactScore.value = student.reactScore;

					document.querySelector("#edit-student-modal").classList.remove("hide");

					form.onsubmit = async function (e) {
						e.preventDefault();

						try {
							const formData = new FormData(form);
							const updateResponse = await fetch(`/students/${id}/update`, {
								method: "POST",
								headers: {
									"X-CSRF-Token": self.csrfToken,
								},
								body: formData,
							});
							const updateData = await updateResponse.json();

							if (updateData.status === "success") {
								self.notify(updateData.message, "success");
								location.reload();
							} else {
								self.notify(updateData.message, "error");
							}
						} catch (err) {
							console.error("Update error:", err);
							self.notify("Network error. Please try again.", "error");
						}
					};
				}
			};
		});
	}

	setupDeleteButtons() {
		document.querySelectorAll(".delete-student").forEach((btn) => {
			btn.onclick = async () => {
				const id = btn.getAttribute("data-id");

				try {
					const response = await fetch(`/students/${id}/delete`, {
						method: "POST",
						headers: {
							"X-CSRF-Token": this.csrfToken,
						},
					});
					const data = await response.json();

					if (data.status === "success") {
						this.notify(data.message, "success");
						document.querySelector(`#student-${id}`)?.remove();
					} else {
						this.notify(data.message, "error");
					}
				} catch (err) {
					console.error("Delete error:", err);
					this.notify("Network error. Please try again.", "error");
				}
			};
		});
	}

	setupResultSelectors() {
		document.querySelectorAll(".student-result").forEach((select) => {
			select.onchange = async () => {
				const id = select.getAttribute("data-id");
				const value = select.value;

				try {
					const response = await fetch(`/students/${id}/result`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"X-CSRF-Token": this.csrfToken,
						},
						body: JSON.stringify({ result: value }),
					});
					const data = await response.json();

					if (data.status === "success") {
						this.notify("Result updated", "success");
					} else {
						this.notify(data.message, "error");
					}
				} catch (err) {
					console.error("Result update error:", err);
					this.notify("Network error. Please try again.", "error");
				}
			};
		});
	}

	notify(text, type) {
		new Noty({
			theme: "metroui",
			text: text,
			type: type,
			layout: "topRight",
			timeout: 3000,
		}).show();
	}
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
	new StudentsList();
});
