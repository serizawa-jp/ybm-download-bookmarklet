const text = Array.from(document.querySelectorAll("#datadown td ul li a"))
    .map(a => [a.textContent, a.getAttribute("href")].join("\t"))
    .join("\n");

navigator.clipboard.writeText(text);
