import { people } from '../../data'

export default function handler(req, res) {
    console.log(people);
    res.status(200).json(people)
}
