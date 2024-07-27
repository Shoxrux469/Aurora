import MainSwiper from "@/components/swiper/Swiper";
import { IProduct } from "@/interfaces/product";
import ProductsService from "@/services/api/products";
import UsersService from "@/services/api/users";
import ProductCard from "@/components/product-card/ProductCard";

const Home = async () => {
  let products = (await ProductsService.getAll()) as IProduct[];

  console.log(products);

  return (
    <div className="bg-white">
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {products?.map((product, i) => (
            <ProductCard key={i} product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

// try {
//   const existingUsers = await UsersService.getByEmail(data.email!);

//   if (existingUsers.length > 0) {
//     toast({
//       title: "Пользователь уже существует!",
//       description:
//         "Пользователь с таким Эмайлом уже существует, пожалуйста попробуйте войти в аккаунт",
//       variant: "default",
//     });
//     return;
//   }

//   // You can proceed with user registration here
//   // const user = await UsersService.postUser(data);
//   // console.log(user);
// } catch (error) {
//   console.error("Error checking user existence:", error);
//   toast({
//     title: "Ошибка",
//     description: "Произошла ошибка при проверке существования пользователя",
//     variant: "destructive",
//   });
// }
