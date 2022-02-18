import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getList(): object {
    // throw new Error('Lalala');
    return [
      {
        "name": "Section1",
        "toppic_id": 1,
        "sort": 2,
        "options": [
          {
            "name": "Option1",
            "sort": 1,
            "checked": false
          },
          {
            "name": "Option2",
            "sort": 2,
            "checked": true
          }
        ],
      },
      {
        "name": "Section2",
        "toppic_id": 1,
        "sort": 1,
        "options": [
          {
            "name": "Option1",
            "sort": 1,
            "checked": false
          },
          {
            "name": "Option2",
            "sort": 2,
            "checked": false
          }
        ],
      },
      {
        "name": "Section3",
        "toppic_id": 1,
        "sort": 3,
        "options": [
          {
            "name": "Option1",
            "sort": 1,
            "checked": false
          },
          {
            "name": "Option2",
            "sort": 2,
            "checked": false
          }
        ],
      },
    ];
  }
  async getRandom(): Promise<string> {
    // throw new Error('Random Fail');
    const randomFact = await axios.get('https://uselessfacts.jsph.pl/random.json');
    return randomFact.data.text;
  }
}
