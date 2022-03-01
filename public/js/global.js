function toggleNavigation() {
	const hamburger = document.querySelector('.js-header-hamburger');
	const navigation = document.querySelector('.js-header-actions');

	if (hamburger) {
		hamburger.addEventListener('click', (e) => {
			const self = e.currentTarget;
			self.classList.toggle('header__hamburger--open');
			navigation.classList.toggle('header__actions--open');
			document.body.classList.toggle('scroll-disabled');
		});
	}
}

function customDropdown() {
	const dropdowns = document.querySelectorAll('.js-dropdown');

	dropdowns.forEach(dropdown => {
		if (dropdown) {

			//toggle list
			const btn = dropdown.querySelector('.js-dropdown-btn');
			const classDropdownOpen = 'form__dropdown--active';

			btn.addEventListener('click', () => {
				if (dropdown.classList.contains(classDropdownOpen)) {
					dropdown.classList.remove(classDropdownOpen);
				} else {
					dropdown.classList.add(classDropdownOpen);
				}
			});

			//select item(s)
			const listItems = dropdown.querySelectorAll('.js-dropdown-item');
			const classListMulti = 'form__dropdown-item-multi';
			const classItemSelected = 'form__dropdown-item--selected';

			listItems.forEach(item => {
				item.addEventListener('click', () => {
					if (!item.classList.contains(classListMulti)) {
						//single choice
						listItems.forEach(item => {
							item.classList.remove(classItemSelected);
						});

						item.classList.add(classItemSelected);
						dropdown.classList.remove(classDropdownOpen);
					} else {
						//multiple choices
						item.classList.toggle(classItemSelected);
					}
				});
			});
		}
	});
}

function statItemPickerClickEvents() {
	const itemsWithChildren = document.querySelectorAll('.js-stats-expand-city');
	const contentClass = '.js-stats-content';
	const content = document.querySelectorAll(contentClass);
	const panel = document.querySelector('.js-stats-panel');
	const subitems = document.querySelectorAll('.js-stats-subitem');

	itemsWithChildren.forEach(item => {
		if (item) {

			const parent = item.parentNode;
			const siblingItem = parent.querySelector(contentClass);
			const itemActiveClass = 'stats-sidebar__btn--active';
			const activeSiblingItemClass = 'stats-sidebar__content--active';

			item.addEventListener('click', () => {
				if (!siblingItem.classList.contains(activeSiblingItemClass)) {
					itemsWithChildren.forEach(allItems => {
						allItems.classList.remove(itemActiveClass);
					});
					content.forEach(allContents => {
						allContents.classList.remove(activeSiblingItemClass);
					});
					subitems.forEach(allContents => {
						allContents.classList.remove('stats-sidebar__subitem--active');
					});
					panel.classList.remove('stats-panel--open');

					siblingItem.classList.add(activeSiblingItemClass);
					item.classList.add(itemActiveClass);
				} else {
					siblingItem.classList.remove(activeSiblingItemClass);
					item.classList.remove(itemActiveClass);
				}
			});
		}
	});
}

function subitemOpenPanel() {
	const subitems = document.querySelectorAll('.js-stats-subitem');
	const panel = document.querySelector('.js-stats-panel');
	const subitemActiveClass = 'stats-sidebar__subitem--active';

	subitems.forEach(item => {
		if (item) {
			item.addEventListener('click', () => {
				if (!item.classList.contains(subitemActiveClass)) {
					subitems.forEach(allItems => {
						allItems.classList.remove(subitemActiveClass);
					});

					item.classList.add(subitemActiveClass);
					panel.classList.add('stats-panel--open');
				}
			});
		}
	});

	const submitBtn = document.querySelector('.stats-panel__submit');
	const resultsPanel = document.querySelector('.js-stats-results');

	if (submitBtn) {
		submitBtn.addEventListener('click', () => {
			resultsPanel.classList.add('stats-results--open');
		});
	}
}

function panelToggleFloor() {
	const btns = document.querySelectorAll('.js-panel-toggle-floor');

	btns.forEach(btn => {
		if (btn) {
			btn.addEventListener('click', () => {
				const parentTitle = btn.parentNode;
				const floor = parentTitle.nextElementSibling;

				floor.classList.toggle('stats-panel__content--hide');
			});
		}
	});
}

function statItemCompanyClickEvent() {
	const btns = document.querySelectorAll('.js-stats-expand-company');
	const resultsPanel = document.querySelector('.js-stats-results');
	const activeBtnClass = 'stats-sidebar__btn--active';

	btns.forEach(btn => {
		if (btn) {
			btn.addEventListener('click', () => {
				btns.forEach(item => {
					item.classList.remove(activeBtnClass);
				});
				btn.classList.add(activeBtnClass);
				resultsPanel.classList.add('stats-results--open');
			});
		}
	});
}

toggleNavigation();
customDropdown();
statItemPickerClickEvents();
subitemOpenPanel();
panelToggleFloor();
statItemCompanyClickEvent();