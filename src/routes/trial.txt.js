import {join} from 'path';
import {readFileSync} from 'fs';
export async function get() {
    const path = join(__dirname, 'posts/decoration.md')
    const file = readFileSync(path, {encoding: 'utf8'});
    console.log(path)

    return  {
        status: 200,
        body: file
    }
}