import { useEffect, useMemo, useState } from "react";
import { getPlants } from "../api/client.js";
import SearchBar from "../components/SearchBar.jsx";
import Filters from "../components/SearchFilter.jsx";
import PlantGrid from "../components/PlantList.jsx";

export default function Catalog() {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const query = useMemo(() => {
        const q = {};
        if (search) q.search = search; // backend: name regex
        if (selectedCategory) q.category = selectedCategory; // backend: category keyword
        if (inStockOnly) q.inStock = true;
        return q;
    }, [search, selectedCategory, inStockOnly]);

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        getPlants(query)
            .then((data) => {
                if (!mounted) return;
                setPlants(data);
                setError("");
            })
            .catch((e) => mounted && setError(e.message || "Error"))
            .finally(() => mounted && setLoading(false));

        return () => {
            mounted = false;
        };
    }, [query]); // ✅ cleaner dependency

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold">Urvann – Mini Plant Store</h1>
            <SearchBar value={search} onChange={setSearch} />
            <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
            />
            <PlantGrid plants={plants} loading={loading} error={error} />
        </div>
    );
}
