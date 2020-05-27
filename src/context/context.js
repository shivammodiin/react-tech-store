import React, { Component } from "react";
import { linkData } from "./LinkData";
import { items } from "./productData";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProducts: {},
    loading: true,
    price: 0,
    search: "",
    max: 0,
    min: 0,
    company: "all",
    shipping: false,
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const id = item.sys.id;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });

    let featuredProducts = storeProducts.filter((item) => {
      return item.featured === true;
    });

    let maxPrice = Math.max(
      ...storeProducts.map((item) => {
        return item.price;
      })
    );
    // console.log(maxPrice);

    this.setState(
      {
        storeProducts,
        featuredProducts,
        filteredProducts: storeProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice,
      },
      () => {
        this.addTotals();
      }
    );
  };
  //   get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  // get products from local storage
  getStorageProduct = () => {
    return {};
  };

  //grt totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));

    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return { cartItems, subTotal, tax, total };
  };

  //Get Single Product

  getSingleProduct = (id) => {
    let Products = this.state.storeProducts;

    let SingleProduct = Products.find((product) => {
      return product.id === id;
    });

    return SingleProduct;
  };

  //add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };
  //sync storage

  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //add to cart

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);

    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      {
        cart: tempCart,
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  // set Single product
  setSingleProduct = (id) => {
    console.log(`set Single Product  ${id}`);
  };

  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => {
      return item.id === id;
    });
    // console.log(tempCart);
    // console.log({ ...tempCart });
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => {
      return item.id === id;
    });

    cartItem.count--;

    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
      this.setState(
        {
          cart: [...tempCart],
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempItem = [...this.state.cart];
    const cartItems = tempItem.filter((item) => {
      return item.id !== id;
    });

    this.setState(
      {
        cart: cartItems,
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  clearCart = () => {
    this.setState(
      {
        cart: [],
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.sortData
    );
  };

  sortData = () => {
    let {
      storeProducts,
      filteredProducts,
      price,
      search,
      max,
      min,
      company,
      shipping,
    } = this.state;

    let tempProduct = [...storeProducts];

    if (company !== "all") {
      tempProduct = tempProduct.filter((item) => item.company === company);
    }

    if (search.length > 0) {
      tempProduct = tempProduct.filter((item) => {
        let searchData = search.toLowerCase();
        let itempTitle = item.title.toLowerCase();
        return itempTitle.includes(searchData);
      });
    }

    if (price !== max) {
      tempProduct = tempProduct.filter((item) => item.price <= price);
    }

    if (shipping) {
      tempProduct = tempProduct.filter((item) => item.freeShipping === true);
    }

    this.setState({
      filteredProducts: tempProduct,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          getSingleProduct: this.getSingleProduct,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          clearCart: this.clearCart,
          removeItem: this.removeItem,
          handleChange: this.handleChange,
          sortData: this.sortData,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
