interface FilterOption {
  id: string;
  label: string;
  count: number;
  checked?: boolean;
}

interface FilterSection {
  title: string;
  isOpen: boolean;
  options: FilterOption[];
}

export const sectionsData: FilterSection[] = [
  {
    title: "Danh mục sản phẩm",
    isOpen: true,
    options: [
      {
        id: "air-filter",
        label: "Lọc gió Động cơ - Air Filter",
        count: 24,
        checked: true,
      },
      {
        id: "fuel-filter",
        label: "Lọc Nhiên Liệu - Fuel Filter",
        count: 24,
        checked: true,
      },
      { id: "oil-filter", label: "Bộ lọc dầu", count: 24, checked: true },
      {
        id: "cabin-filter",
        label: "Chưa phân loại",
        count: 24,
        checked: false,
      },
      { id: "other", label: "Khác", count: 24, checked: false },
    ],
  },
  {
    title: "Khoảng giá",
    isOpen: true,
    options: [
      { id: "under-100k", label: "Dưới 100.000 đ", count: 0 },
      { id: "100k-300k", label: "100.000 đ - 300.000 đ", count: 0 },
      { id: "300k-500k", label: "300.000 đ - 500.000 đ", count: 0 },
      { id: "over-500k", label: "Trên 500.000 đ", count: 0 },
    ],
  },
  {
    title: "Thương hiệu",
    isOpen: true,
    options: [
      { id: "asakashi", label: "Asakashi", count: 24, checked: false },
      { id: "bosch", label: "Bosch", count: 24, checked: false },
      { id: "hyundai", label: "Huyndai", count: 24, checked: false },
    ],
  },
  {
    title: "Năm sản xuất",
    isOpen: true,
    options: [
      { id: "2021", label: "2021", count: 24, checked: false },
      { id: "2020", label: "2020", count: 24, checked: false },
      { id: "2019", label: "2019", count: 24, checked: false },
      { id: "2018", label: "2018", count: 24, checked: false },
    ],
  },
  {
    title: "Xuất xứ",
    isOpen: true,
    options: [
      { id: "germany", label: "Đức", count: 24, checked: false },
      { id: "japan", label: "Nhật Bản", count: 28, checked: false },
      { id: "thailand", label: "Thailand", count: 40, checked: false },
      { id: "vietnam", label: "Việt Nam", count: 88, checked: false },
    ],
  },
];
