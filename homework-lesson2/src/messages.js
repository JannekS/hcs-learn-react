const messageArray = [
  {
    id: 1,
    author: "Dagobert",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 2,
    author: "Daisy",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 3,
    author: "Mickey",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam. Sapiente cupiditate officia rerum excepturi soluta natus iure eum molestiae obcaecati distinctio, fugit reiciendis sequi sint voluptatum, commodi ut aliquam! Temporibus quidem sed commodi dolore ea debitis enim fuga beatae possimus ut tempore adipisci nihil exercitationem, ad soluta consectetur modi. Autem, dignissimos. Necessitatibus voluptates pariatur, facilis ipsam dolores repellendus quidem! Asperiores nisi blanditiis similique. Aut non incidunt sed corrupti accusantium temporibus hic dolor odit voluptatibus! Qui, totam ex? Ut commodi accusantium dicta praesentium tempore assumenda ratione explicabo qui libero quaerat. Officiis accusantium sequi asperiores illo, quaerat impedit labore quae adipisci possimus facilis consequatur rerum voluptatem nihil distinctio! Culpa, perspiciatis voluptate quaerat debitis magnam laborum commodi aperiam accusantium est quas non.",
    status: "unread",
  },
  {
    id: 4,
    author: "Daisy",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam. Sapiente cupiditate officia rerum excepturi soluta natus iure eum molestiae obcaecati distinctio, fugit reiciendis sequi sint voluptatum, commodi ut aliquam! Temporibus quidem sed commodi dolore ea debitis enim fuga beatae possimus ut tempore adipisci nihil exercitationem, ad soluta consectetur modi. Autem, dignissimos. Necessitatibus voluptates pariatur, facilis ipsam dolores repellendus quidem! Qui, totam ex? Ut commodi accusantium dicta praesentium tempore assumenda ratione explicabo qui libero quaerat. Officiis accusantium sequi asperiores illo, quaerat impedit labore quae adipisci possimus facilis consequatur rerum voluptatem nihil distinctio! Culpa, perspiciatis voluptate quaerat debitis magnam laborum commodi aperiam accusantium est quas non.",
    status: "unread",
  },
  {
    id: 5,
    author: "Tic",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 6,
    author: "Track",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 7,
    author: "Mickey",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 8,
    author: "Trick",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus.",
    status: "unread",
  },
  {
    id: 9,
    author: "Dagobert",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 10,
    author: "Daisy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit consequuntur asperiores numquam facilis molestias quia harum quibusdam. Totam ipsa maxime eveniet consequatur labore quaerat! Quisquam consectetur eaque temporibus aspernatur! Cum iure blanditiis aliquam quidem, magni autem atque minus aperiam in, placeat ipsum molestiae ex dolor doloremque soluta id commodi necessitatibus error qui fugit, illo dolorum! Delectus minima aliquam expedita.",
    status: "unread",
  },
  {
    id: 11,
    author: "Tic",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 12,
    author: "Darkwing Duck",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit consequuntur asperiores numquam facilis molestias quia harum quibusdam. Totam ipsa maxime eveniet consequatur labore quaerat! Quisquam consectetur eaque temporibus aspernatur! Cum iure blanditiis aliquam quidem, magni autem atque minus aperiam in, placeat ipsum molestiae ex dolor doloremque soluta id commodi necessitatibus error qui fugit, illo dolorum! Delectus minima aliquam expedita.",
    status: "unread",
  },
  {
    id: 13,
    author: "Goofy",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 14,
    author: "Dagobert",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
  {
    id: 15,
    author: "Mickey",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates cumque molestiae magni repudiandae corporis id ut. Blanditiis nisi vitae perferendis, iste culpa voluptatem sapiente laudantium doloremque ad rerum tenetur! Nemo quibusdam cum dolorem temporibus debitis doloremque animi, doloribus, accusamus voluptatibus quasi labore delectus repudiandae. Impedit, officiis inventore quidem facere iusto, magni harum, sunt maiores quos repellat vel eaque temporibus. Consequatur consectetur reprehenderit similique assumenda placeat error explicabo nemo dicta sapiente perferendis aspernatur, quam neque quis. Inventore minus quia itaque provident consequuntur voluptate dolores eius atque blanditiis, quis aliquid enim.",
    status: "unread",
  },
];

export default messageArray;
