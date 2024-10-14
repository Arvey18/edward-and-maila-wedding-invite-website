const headerHeight = 80; // Define your header height

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the section's top position
    window.scrollTo({ top: sectionTop - headerHeight, behavior: 'smooth' }); // Adjust for header height
  }
};

export default scrollToSection;
