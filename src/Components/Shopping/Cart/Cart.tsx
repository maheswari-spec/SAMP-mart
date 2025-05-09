import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import { removeItem } from '../../Redux/Slices/CartSlice';
import { increaseQuantity } from '../../Redux/Slices/CartSlice';
import { decreaseQuantity } from '../../Redux/Slices/CartSlice';

const formatter= (value:number)=> new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'INR',
 }).format(value)

const Cart = () => {
const cart = useSelector((state:RootState)=>state.cart)
const dispatch = useDispatch()


const total = cart.reduce((sum,item)=>sum+item.quantity*item.price,0)

const handleRemoveItem = (id:string|number)=>{
  dispatch(removeItem(id))
}

const handleIncrease = (id:string|number)=>{
   dispatch(increaseQuantity(id))
}

const handleDecrease = (id:string|number)=>{
  dispatch(decreaseQuantity(id))
}


  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 mt-20 bg-white/5 rounded-xl ">
      <h1 className="text-2xl text-white sm:text-3xl font-bold mb-6 text-center">Your Cart</h1>
       {cart.length === 0 ? (<h2 className='text-center text-[#dcf245]'>Your Cart is Empty</h2>):(
        <>
        {
          cart.map(item=>(
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b py-6 gap-4">
            <img
              src={item.images?.[0]}
              alt='productImage'
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1 sm:px-6 text-center sm:text-left">
              <h2 className="text-lg text-white font-semibold">{item.name}</h2>
              <p className="text-gray-200 mt-1">{formatter(item.price)}</p>
            </div>
            <div>
              <button onClick={()=>handleIncrease(item.id)} className='mx-2 font-bold h-7 w-7 bg-[#dcf245] rounded-full'>+</button>
              <span className='text-white font-semibold'>{item.quantity}</span>
              <button onClick={()=>handleDecrease(item.id)} className='mx-2 font-bold h-7 w-7 bg-[#dcf245] rounded-full'>-</button>
            </div>
            <button
             onClick={()=>handleRemoveItem(item.id)}
              className="text-black-500 bg-[#dcf245] py-2 px-4 hover:text-black-700 font-medium transition ml-0 sm:ml-4 mt-2 sm:mt-0 hover:bg-white rounded-xl"
            >
              Remove
            </button>
          </div>
          ))
        }
        </>
       )}
        <div className="text-right text-white mt-6 text-xl font-bold">
          Total: <span className="text-white">{formatter(total)}</span>
        </div>
     
    </div>
  );
};

export default Cart;

