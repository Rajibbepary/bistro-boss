

const SectionTitel = ({heading, subHeading}) => {
    return (
        <div className=" w-4/12 mx-auto text-center py-8">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-2xl font-semibold uppercase border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitel;