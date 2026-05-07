

const MenuItem = ({item}) => {
    return (
        <div className="flex space-x-4">
           <img className="h-16 w-20 rounded-tl-none rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]" src={item.image} alt={item.name} /> 
           <div>
                <h3 className="uppercase">{item.name} ---------------------------- </h3>
                <p>{item.recipe}</p>
           </div>
           <p className="text-[#D99904]">${item.price}</p> 
        </div>
    );
};

export default MenuItem;