import axios from "axios";
import { composeApiUrl } from "../../utils/helpers.js";

class FakeApi {
    static getMovies = async () => {
        try {
            const response = await axios.get(composeApiUrl("movies"), {
                "headers": {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }
}

export default FakeApi;