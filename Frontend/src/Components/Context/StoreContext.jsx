import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem, setCartItems] = useState({});
    const [foodDatas,setFoodDatas] = useState([]);
    const [restText,setRestText] = useState();
    const [cart,setCart] = useState(false);
    const navigate = useNavigate();
    const [userName,setUserName] = useState(); 
    const [addCard,setAddCard] = useState(false); 
    const [address,setAddress] = useState(false); 
    const [addressData, setAddressData] = useState([]);  
    const [isUpadte,setIsUpdate] = useState(false);
    const [editId,setEditId] = useState();
    const [cardDatas,setCardDatas] = useState();

    const [card,setCard] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [isUpadteCard,setIsUpdateCard] = useState(false);
    const [editCardId,setEditCardId] = useState();
    const [token,setToken] = useState();
    const [nav,setNav] = useState('Home');

const addToCart = (itemId) => {
    if(!cartItem[itemId]) {
    setCartItems((prev)=>({...prev,[itemId]:1}));
    }
    else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))}
}

const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
}
const getTotalAmount = () =>{
    let cartTotal = 0;
    for (const item in cartItem) {
        if(cartItem[item]>0){
            let getInfo = foodDatas.find((product)=>product.id==item);
            cartTotal+=getInfo.Price*cartItem[item]
        }
    }
    return cartTotal
}
function handleOnRest(e){
    console.log(e.target.textContent)
    if(token){
        navigate('/product');
     setRestText(e.target.textContent);
    }
    else{
        alert("Plaese Login first")
        navigate('/')
    }
}
function handleOnModal() {
     setAddCard(true);
     setAddCard(true);
 }
 function handleOnRemove(){
    return setAddCard(false);
 }

 function handleOnAddress(){
    return setAddress(true);
 }
 function handleOnCard(){
    return setCard(true);
 }
 function handleOnAddress1(id){
    setIsUpdate(true);
    setAddress(true);
        setEditId(id);
 }
 function handleOnCard1(id){
    setAddCard(true);
    setIsUpdateCard(true);
    // setCard(true);
    setEditCardId(id);
 }

 console.log(editId)

    const contextValue = {
        
        removeFromCart,
        addToCart,
        cartItem,
        setCartItems,
        foodDatas,
        setFoodDatas,
        getTotalAmount,
        handleOnRest,
        restText,
        cart,
        setCart,
        userName,
        setUserName,
        addCard,
        setAddCard,
        handleOnModal,
        handleOnRemove,
        address,
        setAddress,
        handleOnAddress,
        addressData,
        setAddressData,
        handleOnAddress1,
        isUpadte,
        setIsUpdate,
        editId,
        setEditId,
        cardDatas,
        setCardDatas,
        card,
        setCard,
        cardData,
        setCardData,
        isUpadteCard,
        setIsUpdateCard,
        editCardId,
        setEditCardId,
        handleOnCard,
        handleOnCard1,
        token,
        setToken,
        nav,
        setNav

         
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider