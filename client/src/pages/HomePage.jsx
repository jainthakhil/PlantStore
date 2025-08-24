// import React, { useEffect, useState } from "react";
// import { getPlants } from "../api/client";
// import PlantList from "../components/PlantList";
// import SearchFilter from "../components/SearchFilter";

// const HomePage = () => {
//     const [plants, setPlants] = useState([]);
//     const [filtered, setFiltered] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [search, setSearch] = useState("");
//     const [category, setCategory] = useState("");

//     const categories = ["Indoor", "Outdoor", "Succulent", "Air Purifying", "Home Decor"];

//     useEffect(() => {
//         const fetchPlants = async () => {
//             try {
//                 setLoading(true);
//                 const data = await getPlants();
//                 setPlants(data);
//                 setFiltered(data);
//             } catch (err) {
//                 setError("Failed to fetch plants", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchPlants();
//     }, []);

//     useEffect(() => {
//         let result = plants;
//         if (search) {
//             result = result.filter((p) =>
//                 p.name.toLowerCase().includes(search.toLowerCase()) ||
//                 p.categories.some((c) => c.toLowerCase().includes(search.toLowerCase()))
//             );
//         }
//         if (category) {
//             result = result.filter((p) => p.categories.includes(category));
//         }
//         setFiltered(result);
//     }, [search, category, plants]);

//     if (loading) return <p className="text-center p-4">Loading...</p>;
//     if (error) return <p className="text-center text-red-500 p-4">{error}</p>;

//     return (
//         <div>
//             <SearchFilter
//                 search={search}
//                 setSearch={setSearch}
//                 category={category}
//                 setCategory={setCategory}
//                 categories={categories}
//             />
//             <PlantList plants={filtered} />
//         </div>
//     );
// };

// export default HomePage;



import React, { useEffect, useState } from "react";
import { getPlants } from "../api/client";
import PlantList from "../components/PlantList";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
    const [plants, setPlants] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const categories = ["Indoor", "Outdoor", "Succulent", "Air Purifying", "Home Decor"];

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                setLoading(true);
                const data = await getPlants();
                setPlants(data);
                setFiltered(data);
            } catch (err) {
                setError("Failed to fetch plants", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPlants();
    }, []);

    useEffect(() => {
        let result = plants;
        if (search) {
            result = result.filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.categories.some((c) => c.toLowerCase().includes(search.toLowerCase()))
            );
        }
        if (category) {
            result = result.filter((p) => p.categories.includes(category));
        }
        setFiltered(result);
    }, [search, category, plants]);

    if (loading) return <p className="text-center p-6 text-lg font-semibold text-green-600 animate-pulse">Loading plants...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold p-6">{error}</p>;

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Page Header */}
            <h1 className="text-3xl sm:text-4xl font-bold text-green-700 text-center mb-8">
                🌱 Explore Our Plant Collection
            </h1>

            {/* Search + Filter */}
            <div className="mb-10 shadow-lg rounded-2xl">
                <SearchFilter
                    search={search}
                    setSearch={setSearch}
                    category={category}
                    setCategory={setCategory}
                    categories={categories}
                />
            </div>

            {/* Plant List */}
            <div className="mt-6">
                <PlantList plants={filtered} />
            </div>
        </div>
    );
};

export default HomePage;
