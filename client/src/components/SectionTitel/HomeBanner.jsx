import chef from '../../assets/home/chef-service.jpg';

const HomeBanner = () => {
  return (
    <div
      className="relative my-10 w-11/12 mx-auto rounded-md h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${chef})`,
      }}
    >
      <div className="bg-white/50 bg-color/opacity p-6 md:p-10 rounded-md text-center max-w-2xl mx-4 opacity-80 ">
        <h2 className="uppercase text-2xl font-bold mb-4">Bistro Boss</h2>
        <p className="text-gray-900">
  Welcome to Bistro Boss — where culinary artistry meets comfort dining. We take pride in serving delicious, handcrafted meals made from the freshest ingredients. Join us for a taste that’s both memorable and made with passion.
</p>

      </div>
    </div>
  );
};

export default HomeBanner;
