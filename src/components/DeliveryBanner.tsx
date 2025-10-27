import { Bike } from "lucide-react";

const DeliveryBanner = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg md:rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <div className="bg-primary/10 p-3 sm:p-4 md:p-5 rounded-full flex-shrink-0">
                <Bike className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 md:mb-3">
                  ENTREGA MOTO BOY
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
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
