# Buttons

Требуется разработать компоненты кнопок.

Основным компонентом будет `BaseButton`:
- Входные параметры:
    - `block` - логический, является ли кнопка блоком (с классом `button_block`);
    - `tag` - строковый параметр, элемент, который используется для кнопки (`button`, `a`, `router-link`), по умолчанию `button`;
- Слот по умолчанию - содержимое кнопки;
- Параметр `tag` должен проверяться валидатором на допустимые значения;
- На кнопке должны работать все стандартные события (такие, как `click`) без добавления модификатора `.native`. 

Ещё две кнопки основаны на `BaseButton`:
- `PrimaryButton` - это `BaseButton` с классом `button_primary`;
- `SecondaryButton` - это `BaseButton` с классом `button_secondary`.

---

### Инструкция

📝 Для решения задачи отредактируйте файлы: `components/BaseButton.vue`, `components/PrimaryButton.vue`, `components/SecondaryButton.vue`.

🚀 Команда запуска для ручного тестирования: `npm run vue-serve`;<br>
приложение будет доступно на [http://localhost:8080/5-module-2-task](http://localhost:8080/5-module-2-task).

✅ Доступно автоматическое тестирование: `npm test 5-2`.
