const headerHeight = 80; // Define your header height

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the section's top position
    const scrollPosition = sectionTop - headerHeight;

    const maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: Math.min(scrollPosition, maxScrollPosition), // Ensure we don't scroll beyond max scrollable area
      behavior: 'smooth',
    });
  }
};

export default scrollToSection;
