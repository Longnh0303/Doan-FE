const navigation = () => {
  return [
    {
      title: "Theo dõi cảm biến",
      path: "/home",
      icon: "tabler:share",
      action: "read",
      subject: "home-page",
    },
    {
      title: "Quản lý người dùng",
      path: "/users",
      icon: "tabler:users",
    },
    {
      title: "Danh sách thiết bị",
      path: "/devices",
      icon: "tabler:server-bolt",
    },
    {
      title: "Kiến thức",
      path: "/knowledge",
      icon: "tabler:book",
      action: "read",
      subject: "knowledge-page",
    },
    {
      title: "Hướng dẫn sử dụng",
      path: "/helps",
      icon: "tabler:help",
      action: "read",
      subject: "helps-page",
    },
  ];
};

export default navigation;
