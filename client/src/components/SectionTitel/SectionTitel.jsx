

const SectionTitel = ({heading, subHeading}) => {
    return (
        <div className=" w-4/12 mx-auto text-center py-8">
            <p className="text-yellow-600 mb-2">---{heading}---</p>
            <h3 className="text-2xl font-semibold uppercase border-y-2 py-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitel;