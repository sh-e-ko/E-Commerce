// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// const data = JSON.parse(fs.readFileSync("products.json", "utf-8"));

// const allProducts = [
//     ...data.men,
//     ...data.women,
//     ...data.kids.boys,
//     ...data.kids.girls
// ];

// // 🟢 كل المنتجات
// app.get("/api/products", (req, res) =>
// {
//     res.json(allProducts);
// });

// // 🟢 منتج واحد بالـ ID
// app.get("/api/products/:id", (req, res) =>
// {
//     const id = parseInt(req.params.id);
//     const product = allProducts.find(p => p.id === id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
// });

// // 🟢 منتجات الرجال
// app.get("/api/men", (req, res) =>
// {
//     res.json(data.men);
// });

// // 🟢 منتجات النساء
// app.get("/api/women", (req, res) =>
// {
//     res.json(data.women);
// });

// // 🟢 أولاد
// app.get("/api/kids/boys", (req, res) =>
// {
//     res.json(data.kids.boys);
// });

// // 🟢 بنات
// app.get("/api/kids/girls", (req, res) =>
// {
//     res.json(data.kids.girls);
// });

// app.listen(PORT, () =>
// {
//     console.log(`✅ Server running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const app = express();

// const PORT = 5000;

// app.use(cors());
// app.use(express.json());


// // 🟡 قراءة المنتجات من ملف products.json
// const productData = JSON.parse(fs.readFileSync("products.json", "utf-8"));
// const allProducts = [
//     ...productData.men,
//     ...productData.women,
//     ...productData.kids.boys,
//     ...productData.kids.girls
// ];

// // 🟡 قراءة المستخدمين من ملف users.json
// const readUsers = () => JSON.parse(fs.readFileSync("users.json", "utf-8"));
// const writeUsers = (users) => fs.writeFileSync("users.json", JSON.stringify(users, null, 2));


// // ✅ عرض كل المنتجات
// app.get("/api/products", (req, res) =>
// {
//     res.json(allProducts);
// });

// // ✅ منتج واحد بالـ ID
// app.get("/api/products/:id", (req, res) =>
// {
//     const id = parseInt(req.params.id);
//     const product = allProducts.find(p => p.id === id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
// });

// // ✅ منتجات الرجال
// app.get("/api/men", (req, res) =>
// {
//     res.json(productData.men);
// });

// // ✅ منتجات النساء
// app.get("/api/women", (req, res) =>
// {
//     res.json(productData.women);
// });

// // ✅ أولاد
// app.get("/api/kids/boys", (req, res) =>
// {
//     res.json(productData.kids.boys);
// });

// // ✅ بنات
// app.get("/api/kids/girls", (req, res) =>
// {
//     res.json(productData.kids.girls);
// });


// // ✅ تسجيل الدخول
// app.post("/api/login", (req, res) =>
// {
//     const { email, password } = req.body;
//     const users = readUsers();

//     const user = users.find(u => u.email === email && u.password === password);

//     if (!user)
//     {
//         return res.status(401).json({ message: "Invalid email or password" });
//     }

//     res.json({
//         message: "Login successful",
//         user: {
//             id: user.id,
//             name: user.name,
//             email: user.email
//         },
//         token: "fake-jwt-token"
//     });
// });

// // ✅ تسجيل حساب جديد
// app.post("/api/register", (req, res) =>
// {
//     const { name, email, password } = req.body;
//     const users = readUsers();

//     const existingUser = users.find(u => u.email === email);
//     if (existingUser)
//     {
//         return res.status(400).json({ message: "Email already exists" });
//     }

//     const newUser = {
//         id: Date.now(),
//         name,
//         email,
//         password
//     };

//     users.push(newUser);
//     writeUsers(users);

//     res.status(201).json({
//         message: "User registered successfully",
//         user: {
//             id: newUser.id,
//             name: newUser.name,
//             email: newUser.email
//         },
//         token: "fake-jwt-token"
//     });
// });


// // ✅ تشغيل السيرفر
// app.listen(PORT, () =>
// {
//     console.log(`✅ Server running at http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🟡 قراءة المنتجات
const productData = JSON.parse(fs.readFileSync("products.json", "utf-8"));
const allProducts = [
    ...productData.men,
    ...productData.women,
    ...productData.kids.boys,
    ...productData.kids.girls
];

// 🟡 قراءة/كتابة المستخدمين
const readUsers = () =>
{
    try
    {
        const data = fs.readFileSync("users.json", "utf-8");
        return JSON.parse(data || "[]");
    } catch (err)
    {
        console.error("❌ Error reading users.json:", err);
        return [];
    }
};

const writeUsers = (users) =>
{
    try
    {
        fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    } catch (err)
    {
        console.error("❌ Error writing users.json:", err);
    }
};

// ✅ المنتجات
app.get("/api/products", (req, res) => res.json(allProducts));
app.get("/api/products/:id", (req, res) =>
{
    const id = parseInt(req.params.id);
    const product = allProducts.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});
app.get("/api/men", (req, res) => res.json(productData.men));
app.get("/api/women", (req, res) => res.json(productData.women));
app.get("/api/kids/boys", (req, res) => res.json(productData.kids.boys));
app.get("/api/kids/girls", (req, res) => res.json(productData.kids.girls));

// ✅ تسجيل الدخول
app.post("/api/login", (req, res) =>
{
    try
    {
        console.log("🟢 Login Request Body:", req.body);
        const { email, password } = req.body;
        if (!email || !password)
        {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const users = readUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user)
        {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token: "fake-jwt-token"
        });
    } catch (err)
    {
        console.error("❌ Error in /api/login:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// ✅ تسجيل حساب جديد
app.post("/api/register", (req, res) =>
{
    try
    {
        console.log("🟢 Register Request Body:", req.body);
        const { name, email, password } = req.body;

        if (!name || !email || !password)
        {
            return res.status(400).json({ message: "All fields are required" });
        }

        const users = readUsers();
        const existingUser = users.find(u => u.email === email);

        if (existingUser)
        {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        };

        users.push(newUser);
        writeUsers(users);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            },
            token: "fake-jwt-token"
        });
    } catch (err)
    {
        console.error("❌ Error in /api/register:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// ✅ تشغيل السيرفر
app.listen(PORT, () =>
{
    console.log(`✅ Server running at http://localhost:${PORT}`);
});

