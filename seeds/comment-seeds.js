const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'The quick brown fox jumps over the lazy dog.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'The beach was crowded with snow leopards.',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'The tortoise jumped into the lake with dreams of becoming a sea turtle.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Separation anxiety is what happens when you cannot find your phone.',
    user_id: 3,
    post_id: 5
  },
  {
    comment_text: 'She looked into the mirror and saw another person.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'I had a friend in high school named Rick Shaw, but he was fairly useless as a mode of transport.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'Two more days and all his problems would be solved.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Despite multiple complications and her near-death experience.',
    user_id: 7,
    post_id: 1
  },
  {
    comment_text: 'She wanted a pet platypus but ended up getting a duck and a ferret instead.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Even with the snow falling outside, she felt it appropriate to wear her bikini.',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'The Japanese yen for commerce is still well-known.',
    user_id: 3,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
