import * as tslib_1 from "tslib";
import { QuestionBase } from './question-base';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
var SelectQuestion = /** @class */ (function (_super) {
    tslib_1.__extends(SelectQuestion, _super);
    function SelectQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'select';
        _this.options = options.options || [];
        _this.controlType = AfeControlType.AfeFormControl;
        _this.dataSource = options.dataSource || '';
        return _this;
    }
    return SelectQuestion;
}(QuestionBase));
export { SelectQuestion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXF1ZXN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvc2VsZWN0LXF1ZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXBGO0lBQW9DLDBDQUFZO0lBSTlDLHdCQUFZLE9BQThCO1FBQTFDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBS2Y7UUFKQyxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUM5QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxLQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBb0MsWUFBWSxHQVcvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXN0aW9uQmFzZSB9IGZyb20gJy4vcXVlc3Rpb24tYmFzZSc7XG5pbXBvcnQgeyBTZWxlY3RRdWVzdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvc2VsZWN0LXF1ZXN0aW9uLW9wdGlvbnMnO1xuaW1wb3J0IHsgQWZlQ29udHJvbFR5cGUgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC1jb250cm9scy1leHRlbnNpb24vYWZlLWNvbnRyb2wtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RRdWVzdGlvbiBleHRlbmRzIFF1ZXN0aW9uQmFzZSB7XG4gIG9wdGlvbnM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdO1xuICBkYXRhU291cmNlPzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFNlbGVjdFF1ZXN0aW9uT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMucmVuZGVyaW5nVHlwZSA9ICdzZWxlY3QnO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLmNvbnRyb2xUeXBlID0gQWZlQ29udHJvbFR5cGUuQWZlRm9ybUNvbnRyb2w7XG4gICAgdGhpcy5kYXRhU291cmNlID0gb3B0aW9ucy5kYXRhU291cmNlIHx8ICcnO1xuICB9XG59XG4iXX0=