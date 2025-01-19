const { PrismaClient } = require("@prisma/client");
const crops = require("./crops.json");
const prisma = new PrismaClient();

async function main() {
  for (const crop of crops) {
    await prisma.crops.create({
      data: crop,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeding successful!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
