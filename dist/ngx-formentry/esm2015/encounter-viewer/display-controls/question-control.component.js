import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
export class QuestionControlComponent {
    constructor() {
        // The internal data model
        this.innerValue = '';
    }
    set schema(schema) {
        this._schema = schema;
    }
    set value(value) {
        this._value = value;
    }
    set dataSource(dataSource) {
        this._dataSource = dataSource;
    }
    ngOnInit() {
        this.writeValue(this._value);
    }
    isUuid(value) {
        if (value.length === 36 &&
            value.indexOf(' ') === -1 &&
            value.indexOf('.') === -1) {
            return true;
        }
        else {
            return false;
        }
    }
    // Current time string.
    writeValue(v, arrayElement) {
        if (v !== this.innerValue) {
            if (this.isUuid(v)) {
                if (!arrayElement) {
                    const val = this._dataSource.resolveSelectedValueFromSchema(v, this._schema);
                    if (val) {
                        this.innerValue = val.toUpperCase();
                    }
                    else {
                        this.innerValue = v;
                    }
                }
                else {
                    return this._dataSource.resolveSelectedValueFromSchema(v, this._schema);
                }
            }
            else if (_.isArray(v)) {
                const arr = [];
                _.forEach(v, (el) => {
                    arr.push(this.writeValue(el, true));
                });
                this.innerValue = arr;
            }
            else if (this.isDate(v)) {
                if (!arrayElement) {
                    this.innerValue = this._dataSource.convertTime(v);
                }
                else {
                    return this._dataSource.convertTime(v);
                }
            }
            else {
                if (!arrayElement) {
                    this.innerValue = v;
                }
                else {
                    return v;
                }
            }
        }
    }
    isDate(str) {
        return this._dataSource.isDate(str) && !_.isNumber(str);
    }
}
QuestionControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'question-control',
                styles: [`input{border:none;box-shadow:none;color:#000;background:#fff!important;padding-top:23px;display:block;position:relative}`],
                template: `<div>
  {{ innerValue }}
</div>
`
            },] },
];
QuestionControlComponent.ctorParameters = () => [];
QuestionControlComponent.propDecorators = {
    schema: [{ type: Input }],
    value: [{ type: Input }],
    dataSource: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJlbmNvdW50ZXItdmlld2VyL2Rpc3BsYXktY29udHJvbHMvcXVlc3Rpb24tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFVNUIsTUFBTTtJQWVKO1FBTEEsMEJBQTBCO1FBQ25CLGVBQVUsR0FBUSxFQUFFLENBQUM7SUFJYixDQUFDO0lBZGhCLElBQW9CLE1BQU0sQ0FBQyxNQUFXO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFvQixLQUFLLENBQUMsS0FBSztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBb0IsVUFBVSxDQUFDLFVBQWU7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQVFELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ00sTUFBTSxDQUFDLEtBQWE7UUFDekIsRUFBRSxDQUFDLENBQ0QsS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFO1lBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUMxQixDQUFDLENBQUMsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFDRCx1QkFBdUI7SUFFaEIsVUFBVSxDQUFDLENBQU0sRUFBRSxZQUFzQjtRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FDekQsQ0FBQyxFQUNELElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN0QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsOEJBQThCLENBQ3BELENBQUMsRUFDRCxJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7Z0JBQ0osQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDZixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO29CQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsTUFBTSxFQUFFLENBQUMsMEhBQTBILENBQUM7Z0JBQ3BJLFFBQVEsRUFBRTs7O0NBR1g7YUFDQTs7OztxQkFFRSxLQUFLO29CQUdMLEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5jb3VudGVyVmlld2VyU2VydmljZSB9IGZyb20gJy4uL2VuY291bnRlci12aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1ZXN0aW9uLWNvbnRyb2wnLFxuICBzdHlsZXM6IFtgaW5wdXR7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMwMDA7YmFja2dyb3VuZDojZmZmIWltcG9ydGFudDtwYWRkaW5nLXRvcDoyM3B4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9YF0sXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAge3sgaW5uZXJWYWx1ZSB9fVxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgc2NoZW1hKHNjaGVtYTogYW55KSB7XG4gICAgdGhpcy5fc2NoZW1hID0gc2NoZW1hO1xuICB9XG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgfVxuICAvLyBUaGUgaW50ZXJuYWwgZGF0YSBtb2RlbFxuICBwdWJsaWMgaW5uZXJWYWx1ZTogYW55ID0gJyc7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIHByaXZhdGUgX3NjaGVtYTogYW55O1xuICBwcml2YXRlIF9kYXRhU291cmNlOiBFbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgfVxuICBwdWJsaWMgaXNVdWlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZS5sZW5ndGggPT09IDM2ICYmXG4gICAgICB2YWx1ZS5pbmRleE9mKCcgJykgPT09IC0xICYmXG4gICAgICB2YWx1ZS5pbmRleE9mKCcuJykgPT09IC0xXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDdXJyZW50IHRpbWUgc3RyaW5nLlxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHY6IGFueSwgYXJyYXlFbGVtZW50PzogYm9vbGVhbikge1xuICAgIGlmICh2ICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzVXVpZCh2KSkge1xuICAgICAgICBpZiAoIWFycmF5RWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2RhdGFTb3VyY2UucmVzb2x2ZVNlbGVjdGVkVmFsdWVGcm9tU2NoZW1hKFxuICAgICAgICAgICAgdixcbiAgICAgICAgICAgIHRoaXMuX3NjaGVtYVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlLnJlc29sdmVTZWxlY3RlZFZhbHVlRnJvbVNjaGVtYShcbiAgICAgICAgICAgIHYsXG4gICAgICAgICAgICB0aGlzLl9zY2hlbWFcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKF8uaXNBcnJheSh2KSkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgXy5mb3JFYWNoKHYsIChlbCkgPT4ge1xuICAgICAgICAgIGFyci5wdXNoKHRoaXMud3JpdGVWYWx1ZShlbCwgdHJ1ZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gYXJyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGF0ZSh2KSkge1xuICAgICAgICBpZiAoIWFycmF5RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHRoaXMuX2RhdGFTb3VyY2UuY29udmVydFRpbWUodik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2UuY29udmVydFRpbWUodik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghYXJyYXlFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZS5pc0RhdGUoc3RyKSAmJiAhXy5pc051bWJlcihzdHIpO1xuICB9XG59XG4iXX0=