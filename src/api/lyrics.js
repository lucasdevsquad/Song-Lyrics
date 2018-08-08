import axios from 'axios';

export const searchLyric = async ({ searchMusicBand, searchMusicTitle }) => {
    try {
        const {data: response } = await axios.get(`https://api.lyrics.ovh/v1/${searchMusicBand}/${searchMusicTitle.replace(/\s/gmi, '%20')}`);

        return response;
    } catch(e) {
        throw e.response.data
    }
}