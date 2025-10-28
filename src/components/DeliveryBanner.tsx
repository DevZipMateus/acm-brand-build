import deliveryIcon from "@/assets/delivery-icon.jpg";

const DeliveryBanner = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg md:rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={deliveryIcon} 
                  alt="Entrega Moto Boy"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                  ENTREGA MOTO BOY
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
