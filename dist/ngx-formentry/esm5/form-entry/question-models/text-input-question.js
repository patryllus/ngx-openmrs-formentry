import * as tslib_1 from "tslib";
import { QuestionBase } from './question-base';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
var TextInputQuestion = /** @class */ (function (_super) {
    tslib_1.__extends(TextInputQuestion, _super);
    function TextInputQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.placeholder = options.placeholder || '';
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return TextInputQuestion;
}(QuestionBase));
export { TextInputQuestion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC1xdWVzdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbXBhdGgta2VueWEvbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvdGV4dC1pbnB1dC1xdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVwRjtJQUF1Qyw2Q0FBWTtJQUcvQywyQkFBWSxPQUE0QjtRQUF4QyxZQUVJLGtCQUFNLE9BQU8sQ0FBQyxTQUdqQjtRQUZHLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDN0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDOztJQUNyRCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBdUMsWUFBWSxHQVNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXN0aW9uQmFzZSB9IGZyb20gJy4vcXVlc3Rpb24tYmFzZSc7XG5pbXBvcnQgeyBUZXh0UXVlc3Rpb25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3RleHQtcXVlc3Rpb24tb3B0aW9ucyc7XG5pbXBvcnQgeyBBZmVDb250cm9sVHlwZSB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbi9hZmUtY29udHJvbC10eXBlJztcblxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dFF1ZXN0aW9uIGV4dGVuZHMgUXVlc3Rpb25CYXNlIHtcblxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogVGV4dFF1ZXN0aW9uT3B0aW9ucykge1xuXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICAgICAgdGhpcy5jb250cm9sVHlwZSA9IEFmZUNvbnRyb2xUeXBlLkFmZUZvcm1Db250cm9sO1xuICAgIH1cbn1cbiJdfQ==