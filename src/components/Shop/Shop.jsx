import { useState } from 'react';

// Styles
import './Shop.css';

// Data
import { inventoryData } from '../../data/data';

// Components
import InventoryList from '../../components/InventoryList/InventoryList';

const Shop = () => {
    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([]);

    const handleAddItem = (selectedItem) => {
        setUserInventory([...userInventory, selectedItem]);
        setShopInventory(shopInventory.filter((item) => item._id !== selectedItem._id));
    };

    const handleRemoveItem = (selectedItem) => {
        setShopInventory([...shopInventory, selectedItem]);
        setUserInventory(userInventory.filter((item) => item._id !== selectedItem._id));
    };
    
    return (
        <main>
          <h1>Shop</h1>
          <section className="shop-section">
            <InventoryList title="Shop Inventory" inventory={shopInventory} handleItem={handleAddItem} />
            <InventoryList title="User Inventory" inventory={userInventory} handleItem={handleRemoveItem} />
          </section>
        </main>
      );
};

export default Shop;
