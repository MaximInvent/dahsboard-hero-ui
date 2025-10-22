# FrontierOne Brand System

## Цветовая палитра

### Основные цвета
- **Primary**: `#007bff` (синий) - основной цвет бренда
- **Primary Dark**: `#0056b3` (темно-синий) - для заголовков и акцентов
- **Dark Blue**: `#111057` (темно-синий) - для прогресс-баров и специальных элементов
- **Secondary**: `#6c757d` (серый) - для вторичных элементов
- **Success**: `#28a745` (зеленый) - для успешных состояний
- **Warning**: `#ffc107` (желтый) - для предупреждений
- **Danger**: `#dc3545` (красный) - для ошибок

### Дополнительные цвета для UI
- **Chart Grid**: `#e9ecef` (светло-серый) - для сетки графиков
- **Chart Text**: `#6c757d` (серый) - для текста на графиках
- **Chart Border**: `#dee2e6` (светло-серый) - для границ графиков
- **White**: `#ffffff` (белый) - для фонов и обводок

### Цвета для иконок активности
- **Activity Blue**: `#007bff` (синий) - для иконок документов
- **Activity Blue BG**: `#e3f2fd` (светло-синий) - для фона синих иконок
- **Activity Green**: `#28a745` (зеленый) - для иконок пользователей
- **Activity Green BG**: `#d4edda` (светло-зеленый) - для фона зеленых иконок
- **Activity Purple**: `#6f42c1` (фиолетовый) - для иконок трендов
- **Activity Purple BG**: `#e2d9f3` (светло-фиолетовый) - для фона фиолетовых иконок

### Цвета для Quick Actions
- **Quick Purple**: `#5B32E5` (фиолетовый) - для основной кнопки "New Proposal"
- **Quick Teal**: `#20C997` (бирюзовый) - для вторичной кнопки "Add Client"

### Цвета для графиков
- **Chart Line**: `#4A6FEF` (ярко-синий) - для линий и точек на графиках

### Использование в Tailwind CSS

#### Цвета
```css
/* Основные цвета */
text-primary-500    /* Синий текст */
text-primary-600    /* Темно-синий текст */
text-darkblue-500   /* Темно-синий текст (#111057) */
text-success-500    /* Зеленый текст */
text-warning-500    /* Желтый текст */
text-danger-500     /* Красный текст */

/* Фоны */
bg-primary-500      /* Синий фон */
bg-darkblue-500     /* Темно-синий фон (#111057) */
bg-success-100      /* Светло-зеленый фон */
bg-warning-100      /* Светло-желтый фон */
bg-danger-100       /* Светло-красный фон */

/* Границы */
border-primary-500  /* Синяя граница */
border-success-500  /* Зеленая граница */
border-warning-500  /* Желтая граница */
border-danger-500   /* Красная граница */

/* CSS переменные для inline стилей */
var(--color-primary)        /* Основной синий */
var(--color-primary-dark)   /* Темно-синий */
var(--color-darkblue)       /* Темно-синий для прогресс-баров */
var(--color-chart-grid)     /* Сетка графиков */
var(--color-chart-text)     /* Текст на графиках */
var(--color-chart-border)   /* Границы графиков */
var(--color-white)          /* Белый */

/* Цвета для иконок активности */
var(--color-activity-blue)      /* Синий для иконок документов */
var(--color-activity-blue-bg)   /* Светло-синий фон */
var(--color-activity-green)     /* Зеленый для иконок пользователей */
var(--color-activity-green-bg)  /* Светло-зеленый фон */
var(--color-activity-purple)    /* Фиолетовый для иконок трендов */
var(--color-activity-purple-bg) /* Светло-фиолетовый фон */

/* Цвета для Quick Actions */
var(--color-quick-purple)       /* Фиолетовый для кнопки "New Proposal" */
var(--color-quick-teal)         /* Бирюзовый для кнопки "Add Client" */

/* Цвета для графиков */
var(--color-chart-line)         /* Ярко-синий для линий и точек графиков */
```

#### Нейтральные цвета
```css
/* Текст */
text-neutral-900    /* Самый темный */
text-neutral-600    /* Средний */
text-neutral-500    /* Светлый */
text-neutral-400    /* Очень светлый */

/* Фоны */
bg-neutral-50       /* Очень светлый фон */
bg-neutral-100      /* Светлый фон */
bg-neutral-200      /* Средний фон */
```

## Типографика

### Шрифты
- **Основной**: Semplicita Pro (если доступен)
- **Fallback**: Inter, Aptos, system-ui, sans-serif

### Размеры шрифтов
```css
text-xs     /* 0.75rem */
text-sm     /* 0.875rem */
text-base   /* 1rem */
text-lg     /* 1.125rem */
text-xl     /* 1.25rem */
text-2xl    /* 1.5rem */
text-3xl    /* 1.875rem */
text-4xl    /* 2.25rem */
text-5xl    /* 3rem */
text-6xl    /* 3.75rem */
```

## Тени

```css
shadow-soft    /* Мягкая тень */
shadow-medium  /* Средняя тень */
shadow-large   /* Большая тень */
```

## Радиусы скругления

```css
rounded-sm     /* 0.375rem */
rounded-md     /* 0.5rem */
rounded-lg     /* 0.75rem */
rounded-xl     /* 1rem */
rounded-2xl    /* 1.5rem */
```

## CSS Переменные

Все цвета также доступны как CSS переменные:

```css
var(--color-primary)        /* #4242E3 */
var(--color-primary-dark)   /* #111057 */
var(--color-secondary)      /* #7318AA */
var(--color-accent)         /* #0DC8DD */
```

## Примеры использования

### Кнопки
```jsx
// Основная кнопка
<Button className="bg-primary-500 hover:bg-primary-900 text-white">
  Primary Button
</Button>

// Вторичная кнопка
<Button className="border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-white">
  Secondary Button
</Button>
```

### Карточки
```jsx
<Card className="border-0 bg-white shadow-medium rounded-2xl">
  <CardHeader>
    <h3 className="text-xl font-semibold text-primary-900">Title</h3>
  </CardHeader>
  <CardBody>
    <p className="text-neutral-600">Content</p>
  </CardBody>
</Card>
```

### Статусы
```jsx
<Chip className="bg-accent-400/10 text-accent-400 border-accent-400/20">
  Active
</Chip>
```
