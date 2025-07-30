import * as fs from 'fs';
import * as path from 'path';
import * as matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const dir = '../portfolio/app/blog/posts/';

    const files = fs.readdirSync(dir);

    let fmatter: any = [];

    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      if (path.extname(file) === '.mdx') {

        try {

          const contents = fs.readFileSync(filePath, 'utf-8');

          fmatter.push(matter.default(contents));

        } catch (error: any) {

          console.error("Error reading " + file + ": " + error.message);

        }

      }

    })

    return new NextResponse(JSON.stringify(fmatter));
    
  } catch (error: any) {
    console.error("Error reading file: " + error.message);
  }
}