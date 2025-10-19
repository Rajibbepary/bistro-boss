

const SectionTitel = ({heading, subHeading}) => {
    return (
        <div className=" md:w-4/12 mx-auto text-center py-8">
            <p className="text-yellow-500 mb-2 font-cinzel">--- {subHeading} ---</p>
            <h3 className="text-2xl font-semibold text-gray-700 uppercase font-cinzel border-y border-slate-300 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitel;