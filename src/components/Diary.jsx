import DiaryAccordion from "./DiaryAccordion";

const Diary = () => {
  const diary = [
    {
      id: 1,
      total_carbs: 200,
      total_fats: 30,
      total_proteins: 60,
      total_kcal: 1600,
      food: [
        {
          id: 1,
          food_name: "chicken",
          food_icon:
            "https://firebasestorage.googleapis.com/v0/b/caofit-84e5f.appspot.com/o/food-icons%2Ficon-chicken.png?alt=media&token=8e99902f-7de5-41eb-9ba6-ba41c6ff5c56",
          food_quantity: 200,
          food_unit: "g",
          food_total_carbs: 250,
          food_total_fats: 50,
          food_total_proteins: 100,
          food_total_kcal: 250,
        },
        {
          id: 2,
          food_name: "broccoli",
          food_icon:
            "https://firebasestorage.googleapis.com/v0/b/caofit-84e5f.appspot.com/o/food-icons%2Ficon-broccoli.png?alt=media&token=1266d29b-587b-46a8-869a-4d27e4491b61",
          food_quantity: 100,
          food_unit: "g",
          food_total_carbs: 50,
          food_total_fats: 0,
          food_total_proteins: 20,
          food_total_kcal: 250,
        },
        {
          id: 3,
          food_name: "chicken",
          food_icon:
            "https://firebasestorage.googleapis.com/v0/b/caofit-84e5f.appspot.com/o/food-icons%2Ficon-chicken.png?alt=media&token=8e99902f-7de5-41eb-9ba6-ba41c6ff5c56",
          food_quantity: 200,
          food_unit: "g",
          food_total_carbs: 250,
          food_total_fats: 50,
          food_total_proteins: 100,
          food_total_kcal: 250,
        },
        {
          id: 4,
          food_name: "broccoli",
          food_icon:
            "https://firebasestorage.googleapis.com/v0/b/caofit-84e5f.appspot.com/o/food-icons%2Ficon-broccoli.png?alt=media&token=1266d29b-587b-46a8-869a-4d27e4491b61",
          food_quantity: 100,
          food_unit: "g",
          food_total_carbs: 50,
          food_total_fats: 0,
          food_total_proteins: 20,
          food_total_kcal: 250,
        },
      ],
      date: "08/21/2023",
      day: "Monday",
      week: "34",
    },
    {
      id: 2,
      total_carbs: 500,
      total_fats: 30,
      total_proteins: 60,
      total_kcal: 1600,
      food: [
        {
          id: 3,
          food_name: "chicken",
          food_icon:
            "https://firebasestorage.googleapis.com/v0/b/caofit-84e5f.appspot.com/o/food-icons%2Ficon-chicken.png?alt=media&token=8e99902f-7de5-41eb-9ba6-ba41c6ff5c56",
          food_quantity: 200,
          food_unit: "g",
          food_total_carbs: 250,
          food_total_fats: 50,
          food_total_proteins: 100,
          food_total_kcal: 250,
        },
        {
          id: 4,
          food_name: "broccoli",
          food_icon:
            "https://firebasestorage.googleapis.com/v0/b/caofit-84e5f.appspot.com/o/food-icons%2Ficon-broccoli.png?alt=media&token=1266d29b-587b-46a8-869a-4d27e4491b61",
          food_quantity: 100,
          food_unit: "g",
          food_total_carbs: 50,
          food_total_fats: 0,
          food_total_proteins: 20,
          food_total_kcal: 250,
        },
      ],
      date: "08/22/2023",
      day: "Tuesday",
      week: "34",
    },
  ];

  return (
    <div className="h-screen flex flex-col lg:items-center lg:bg-diaryBg bg-cover bg-right">
      <div className="bg-gray-200 rounded-md shadow-xl lg:my-8 lg:w-4/6 2xl:w-2/4">
        <div className="px-2 py-2">
          <h1 className="text-5xl font-extrabold text-dark-blue">
            CaoFIT
            <span className="text-3xl font-bold text-dark-blue-light">
              Diary
            </span>
          </h1>
        </div>
        <DiaryAccordion data={diary} />
      </div>
    </div>
  );
};

export default Diary;
