import * as assert from 'assert';
import * as TypeMoq from 'typemoq';
import { Times } from 'typemoq';
import { ColorThemeSwitcherComponent } from '../../app/components/color-theme-switcher/color-theme-switcher.component';
import { AppearanceService } from '../../app/services/appearance/appearance.service';
import { ColorTheme } from '../../app/core/color-theme';

describe('ColorThemeSwitcherComponent', () => {
    describe('setColorTheme', () => {
        it('Should change the selected color theme', () => {
            // Arrange
            const appearanceServiceMock: TypeMoq.IMock<AppearanceService> = TypeMoq.Mock.ofType<AppearanceService>();
            const colorThemeSwitcher: ColorThemeSwitcherComponent = new ColorThemeSwitcherComponent(appearanceServiceMock.object);

            // Act
            const blueColorTheme: ColorTheme = new ColorTheme('default-blue-theme', 'Blue', '#1d7dd4');
            colorThemeSwitcher.setColorTheme(blueColorTheme);

            // Assert
            appearanceServiceMock.verify(x => x.selectedColorTheme = blueColorTheme, Times.atLeastOnce());
        });
    });
});