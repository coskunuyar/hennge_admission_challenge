const data = [
  {
    id: '5760063212',
    from: 'aaa@example.com',
    to: ['zzz.zzz@example.com'],
    subject: '[ HR-888 ] Notice of official announcement',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 9),
  },
  {
    id: '3666075167',
    from: 'bbb.bbbb@example.com',
    to: ['yyy@example.com'],
    subject: '[web:333] "Web Contact"',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 16),
  },
  {
    id: '7755014226',
    from: 'ccc@example.com',
    to: ['xxx@example.com', 'yyy@example.com'],
    subject: 'Happy New Year! Greetings for the New Year.',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: true,
    date: new Date(2020, 0, 7),
  },
  {
    id: '8494296551',
    from: 'ddd.dddd@example.com',
    to: ['vvv.vvv@example.com', 'ccc@example.com'],
    subject:
      '[HR-887(Revised: Office Expansion Project Team)] Notice of off lorem ipsum',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 8),
  },
  {
    id: '6902846064',
    from: 'eee@example.com',
    to: ['sss@example.com', 'xxx@example.com', 'yyy@example.com'],
    subject: '[Github] Logout page',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 5),
  },
  {
    id: '8238587406',
    from: 'fff.ffff@example.c',
    to: ['qqq.qqq@example.com'],
    subject: '􀊦dev􀊧 Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 22),
  },
  {
    id: '6455419628',
    from: 'ggg@example.com',
    to: ['ppp@example.com'],
    subject: 'Re: [Github] Brush-up on loading animation',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 3),
  },
  {
    id: '5623365380',
    from: 'hhh.hhh@examp.com',
    to: ['ooo.ooo@example.com'],
    subject: 'Workplace Summary for sample, Inc.: Jun 2 - Jun 9',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: true,
    date: new Date(2020, 0, 1),
  },
  {
    id: '5545354136',
    from: 'iii@example.com',
    to: ['nnn@example.com'],
    subject: 'I love you',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: true,
    date: new Date(2020, 0, 17),
  },
  {
    id: '5414625252',
    from: 'Pablo-Diego-José-Francisc-ss..s.s.@example.com',
    to: ['Pablo-D-xxxx@example.com'],
    subject: '[info:888] ABC EQUIPMENT COMPANY',
    body:
      'Aenean maximus purus nec leo luctus rhoncus. Donec posuere molestie ligula, non finibus urna ullamcorper eu. Proin condimentum ut turpis vel tempus.',
    hasAttachment: false,
    date: new Date(2020, 0, 13),
  },
];

const getMails = () => data;

export { getMails };
