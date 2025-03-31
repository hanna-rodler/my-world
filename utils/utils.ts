export function scrollToSection(sectionId: string, event: Event) {
  event.preventDefault();

  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 120; // Adjust for fixed header height
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
}
