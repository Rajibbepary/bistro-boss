
import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { FaUtensils } from "react-icons/fa";




const AddItems = () => {
     

    return (
        <div className="w-11/12 mx-auto ">
            <SectionTitel subHeading={"What's new?"} heading={'add in item'}/>
            <div className="py-10 flex flex-col w-11/12  mx-auto justify-between bg-white">
            <form className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Recipe Image*</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <input accept="image/*" type="file" id={`image${index}`} hidden />
                                <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Recipe Name*</label>
                    <input id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Recipe Details*</label>
                    <textarea id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                       <label className="text-base font-medium" htmlFor="category">Category*</label>
                    <select id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {[{ name: 'salad' }, { name: 'pizza' },  { name: 'drinks' }, { name: 'dessert' }, { name: 'soup' }].map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                    </div>
                     <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Price*</label>
                        <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>

                 <button className="px-8 py-2.5 flex items-center font-medium rounded bg-gradient-to-r from-[hsla(36,57%,33%,1)] from-10% via-[hsla(36,57%,33%,1)] via-30% to-[hsla(36,58%,45%,1)] to-90% text-white"> Add Item <FaUtensils/> </button>
            </form>
        </div>
        </div>
    );
};

export default AddItems;