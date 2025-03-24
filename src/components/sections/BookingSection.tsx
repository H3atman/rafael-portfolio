import Calendly from "../Calendly";
import { Container } from "@/components/ui/container";

const BookingSection = () => {
  return (
    <section id="booking" className="py-16 bg-muted/30">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-4 sm:text-4xl">Book a Discovery Call</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to discuss your project? Schedule a free discovery call with me to explore how we can work together.
        </p>
        <div className="w-full max-w-4xl mx-auto overflow-hidden">
          <div className="w-full">
            <Calendly />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingSection;