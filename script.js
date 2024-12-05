const ServiceData = [
  {
    id: 1,
    serviceName: 'Property Management',
    iconName: 'fa-building',
    isComingSoon: false,
  },
  {
    id: 2,
    serviceName: 'Facility Management',
    iconName: 'fa-house-medical',
    isComingSoon: false,
  },
  {
    id: 3,
    serviceName: 'Engineering Contractor',
    iconName: 'fa-helmet-safety',
    isComingSoon: false,
  },
  {
    id: 4,
    serviceName: 'Supplier',
    iconName: 'fa-boxes-packing',
    isComingSoon: false,
  },
  {
    id: 5,
    serviceName: 'Perdagangan Umum',
    iconName: 'fa-money-bill-trend-up',
    isComingSoon: false,
  },
  {
    id: 6,
    serviceName: 'Teknologi Informasi',
    iconName: 'fa-code',
    isComingSoon: true,
  },
];

const getCardContainer = document.getElementById("cardContainer");

getCardContainer.innerHTML = ServiceData.map((data) => {
  const { serviceName, iconName, isComingSoon } = data;

  return (
    `<div class="border-2 group hover:bg-orange-500 ease-in-out transition border-gray-50 flex items-center flex-col p-4">
      <div class="bg-orange-500 group-hover:bg-white w-24 h-24 flex justify-center items-center rounded-full p-6">
        <i class="fa-solid ${iconName} text-4xl text-white group-hover:text-orange-500"></i>
      </div>
      <p class="text-xl font-semibold my-3 group-hover:text-white">
        ${serviceName}
      </p>
      <div class="flex gap-2 group-hover:text-white">
        <p class="my-auto uppercase font-semibold">
          ${isComingSoon ? 'Segera Hadir' : 'Lebih Lanjut'}
        </p>
        <button class="border border-black group-hover:border-white w-8 h-8 flex items-center justify-center rounded-full">
          <i class="fa-solid ${isComingSoon ? 'fa-exclamation' : 'fa-arrow-right'} group-hover:text-white"></i>
        </button>
      </div>
    </div>`
  )
}).join('');

const scrollToSection = (sec) => {
  const section = document.getElementById(sec);
  section.scrollIntoView({ behavior: "smooth" }); // Smoothly scrolls to the section
}