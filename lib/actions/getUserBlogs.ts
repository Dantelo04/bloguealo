import axios from "axios";

export const getUserBlogs = async (userId: string) => {
    try {
        const { data } = await axios.get(`/api/user/blogs/${userId}?includeBlogs=true`);
        return data.blogs || [];
    } catch (err) {
        console.error("Error fetching user blogs:", err);
        return [];
    }
}