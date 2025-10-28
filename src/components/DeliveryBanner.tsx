import motoIcon from "@/assets/moto-icon.jpg";

const DeliveryBanner = () => {
  return (
    <div className="max-w-4xl mx-auto mb-6 md:mb-8 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <img 
              src={motoIcon} 
              alt="Entrega Moto Boy"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2 md:mb-3">
              ENTREGA MOTO BOY
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary">
              Informe rua e n°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;
