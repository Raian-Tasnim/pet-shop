import dogKibbleImg from '../assets/products/dogkibble.jpg';
import featherWandImg from '../assets/products/Feather Wand Toy.jpg';
import orthoBedImg from '../assets/products/Orthopedic Pet Bed.jpg';
import autoFeederImg from '../assets/products/Automatic Food Feeder.jpg';
import dogChewsImg from '../assets/products/Natural Dog Chews.jpg';
import scratchPostImg from '../assets/products/Cat Scratch Post.jpg';
import vitaminsImg from '../assets/products/Vitamin Supplements.jpg';
import collarImg from '../assets/products/Leather Collar.jpg';
import tennisBallImg from '../assets/products/Classic Tennis Ball.jpg';
import idTagImg from '../assets/products/Steel Pet ID Tag.jpg';
import catnipImg from '../assets/products/Mini Catnip Pouch.jpg';

export const productData = [
    // --- EXISTING ITEMS ---
    {
        id: 1,
        name: "Premium Dog Kibble (3kg)",
        price: 4500,
        rating: 5,
        category: "Food & Treats",
        inStock: true,
        img: dogKibbleImg
    },
    {
        id: 2,
        name: "Feather Wand Toy",
        price: 450,
        rating: 4,
        category: "Toys",
        inStock: false,
        img: featherWandImg
    },
    {
        id: 3,
        name: "Orthopedic Pet Bed",
        price: 8500,
        rating: 5,
        category: "Bedding",
        inStock: true,
        img: orthoBedImg
    },
    {
        id: 4,
        name: "Automatic Food Feeder",
        price: 12500,
        rating: 4,
        category: "Accessories",
        inStock: true,
        img: autoFeederImg
    },

    // --- BUDGET FRIENDLY ITEMS ---
    {
        id: 9,
        name: "Classic Tennis Ball",
        price: 150,
        rating: 4,
        category: "Toys",
        inStock: true,
        img: tennisBallImg
    },
    {
        id: 10,
        name: "Steel Pet ID Tag",
        price: 250,
        rating: 5,
        category: "Accessories",
        inStock: true,
        img: idTagImg
    },
    {
        id: 11,
        name: "Mini Catnip Pouch",
        price: 350,
        rating: 5,
        category: "Food & Treats",
        inStock: true,
        img: catnipImg
    },

    // --- REST OF ITEMS ---
    {
        id: 5,
        name: "Natural Dog Chews",
        price: 1200,
        rating: 5,
        category: "Food & Treats",
        inStock: true,
        img: dogChewsImg
    },
    {
        id: 6,
        name: "Cat Scratch Post",
        price: 3500,
        rating: 4,
        category: "Toys",
        inStock: true,
        img: scratchPostImg
    },
    {
        id: 7,
        name: "Vitamin Supplements",
        price: 2200,
        rating: 5,
        category: "Health & Wellness",
        inStock: false,
        img: vitaminsImg
    },
    {
        id: 8,
        name: "Leather Collar",
        price: 1500,
        rating: 4,
        category: "Accessories",
        inStock: true,
        img: collarImg
    },
];