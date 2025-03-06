import Calendly from "../Calendly";

const BookingSection = () => {
  return (
    <section id="booking" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">Book a Discovery Call</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Ready to discuss your project? Schedule a free discovery call with me to explore how we can work together.
        </p>
        <div className="max-w-4xl mx-auto">
          <Calendly />
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 