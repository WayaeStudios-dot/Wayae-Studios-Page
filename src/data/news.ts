export interface Post { slug: string; date: string; title: string; summary: string; body: string[]; }

// Newest first. Add a new entry here to publish an article.
export const posts: Post[] = [
  {
    slug: 'paper-zoo-internal-testing',
    date: '2026-11-23',
    title: 'Paper Zoo is now in internal testing',
    summary: 'Our paper-cut animal memory game has reached internal testing on Android.',
    body: [
      'Paper Zoo, our paper-cut storybook memory game for Android, has entered internal testing. That means the game is playable end to end and our testers are working through all 10 chapters and 100 levels.',
      'During this phase we are checking difficulty, performance on different devices and the overall feel of the game. Your feedback will shape the public release, so thank you to everyone helping out.',
      'We will share release news here as soon as we have it.',
    ],
  },
];
