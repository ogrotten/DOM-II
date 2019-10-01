// Your code goes here
function clg(x) {
	console.log(x);
}

const welcome = document.querySelector(".intro h2");
welcome.tog = 0;
const logoHead = document.querySelector(".logo-heading");
const introtext = document.querySelector(".intro p");

const sectHead = document.querySelectorAll(".text-content h2");
const buttons = document.querySelectorAll(".btn");

// welcome
// welcome.addEventListener("mouseenter", e => {e.target.style = "margin-left: 50px"})
welcome.addEventListener("mouseenter", e => {
	chase(e.target);
});
welcome.addEventListener("mousemove", e => {
	bgcolor(e, "r");
});

// logo
logoHead.addEventListener("mousemove", e => {
	bgcolor(e, "g");
});

// introtext
introtext.addEventListener("mousemove", e => {
	e.target.style = `transform: rotate(${e.offsetX}deg)`;
});
introtext.addEventListener("click", e => {
	e.target.style = `transform: none`;
});

// sectHead
sectHead.forEach(e1 => {
	e1.addEventListener("mousemove", e2 => {
		e2.target.style.transition = `all 0.5s`;
		e2.target.style.textAlign = `center`;
		e2.target.style.transform = `scale(${e2.offsetX * 0.05})`;
	});
	e1.addEventListener("mouseout", e2 => {
		e2.target.style.transform = `none`;
		e2.target.style.textAlign = `left`;
	});
});


// buttons
buttons.forEach(e1 => {
	e1.addEventListener("mousemove", e2 => {
		e2.target.style.transition = `all 0.5s`;
		e2.target.style.textAlign = `center`;
		e2.target.style.transform = `scale(${e2.offsetX * 0.05})`;
	});
	e1.addEventListener("mouseout", e2 => {
		e2.target.style.transform = `none`;
		e2.target.style.textAlign = `left`;
	});
});




// -----------------
// other crap
// -----------------

function chase(e) {
	welcome.tog ? (e.style = "text-align: right; ") : (e.style = "text-align: left");
	welcome.tog = !welcome.tog;
	// e.style = "margin-left: 50px"
}

function bgcolor(e, col) {
	let pos = e.offsetX;
	if (pos > 255) {
		pos = 255 - (pos % 255);
	}

	if (col == "b") {
		e.target.style.backgroundColor = "rgb(255, 255, " + pos + ")";
	} else if (col == "r") {
		e.target.style.backgroundColor = "rgb(" + pos + ", 255, 255)";
	} else {
		e.target.style.backgroundColor = "rgb(255, " + pos + ", 255)";
	}
}

clg(welcome.textContent);
