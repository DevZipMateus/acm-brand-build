import { Bike } from "lucide-react";

const DeliveryBanner = () => {
  return (
    <section className="py-8 sm:py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="bg-primary/10 p-4 sm:p-5 rounded-full">
                <Bike className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3">
                  ENTREGA MOTO BOY
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                  Informe rua e n°
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
