// Loads every image in src/assets/images so Vite bundles them with correct paths
const files = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  import: "default",
});

export default function getImg(name) {
  return files[`../assets/images/${name}`] || "";
}