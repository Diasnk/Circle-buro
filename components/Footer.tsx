export default function Footer() {
  return (
    <footer className="bg-[#AC8EEF] rounded-t-[40px] pt-20 pb-12 px-8  text-[#1a1a1a]">
      <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
             <h3 className="text-2xl font-bold uppercase tracking-tight">CIRCLE</h3>
             <span className="text-sm uppercase tracking-widest">creative buro</span>
          </div>
          <p className="max-w-md text-sm opacity-80 leading-relaxed">
            Circle Creative Buro — креативное бюро и рекламное агентство полного цикла в Алматы. 
            Развиваем бренды в цифровом пространстве и за его пределами.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end text-left md:text-right">
           <h4 className="text-lg font-bold mb-2">Контакты</h4>
           <a href="tel:+77082686982" className="text-lg hover:opacity-70 transition-opacity">+7 708 268 69 82</a>
           <p className="opacity-80">ул. Байзакова 280, Алматы</p>
           <a href="mailto:info@circleburo.kz" className="underline hover:opacity-70">info@circleburo.kz</a>
        </div>
      </div>
    </footer>
  );
}