import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment_ from 'moment';
const moment = moment_;
export class HistoricalEncounterDataService {
    constructor() {
        this.dataSources = {};
    }
    registerEncounters(name, encounters) {
        const encStore = {
            data: [],
            getValue: (key, index = 0) => {
                const pathArray = key.split('.');
                if (pathArray.length > 0) {
                    return this.getFirstValue(pathArray, encStore.data[index]);
                }
                return encStore.data[index][key];
            },
            getAllObjects: () => {
                return encStore.data;
            },
            getSingleObject: (index = 0) => {
                return encStore.data[index];
            }
        };
        if (_.isArray(encounters)) {
            const group = [];
            _.each(encounters, (encounter) => {
                group.push(this._transformEncounter(encounter));
            });
            // Sort them in reverse chronological order
            encStore.data = _.sortBy(group, 'encounterDatetime').reverse();
        }
        else {
            // Assume a single openmrs rest encounter object.
            encStore.data.push(this._transformEncounter(encounters));
        }
        this.putObject(name, encStore);
    }
    putObject(name, object) {
        this.dataSources[name] = object;
    }
    getObject(name) {
        return this.dataSources[name] || null;
    }
    getFirstValue(path, object) {
        const answers = [];
        this.getAllValues(path, object, answers);
        if (answers.length > 0) {
            return {
                value: answers[0],
                valueDate: moment(object.encounterDatetime).format('ll')
            };
        }
    }
    getAllValues(path, object, answers) {
        if (_.isNil(object)) {
            return;
        }
        if (path.length <= 1) {
            if (!_.isNil(object[path[0]])) {
                answers.push(object[path[0]]);
            }
            return;
        }
        const newpath = path.splice(1);
        const key = path[0];
        if (_.isArray(object[key]) && object[key].length > 0) {
            _.each(object[key], (childObject) => {
                this.getAllValues(newpath.slice(0), childObject, answers);
            });
        }
        else {
            this.getAllValues(newpath.slice(0), object[key], answers);
        }
    }
    _transformEncounter(encounter) {
        if (_.isNil(encounter)) {
            return;
        }
        // Transform encounter Level details to key value pairs.
        const prevEncounter = {
            encounterDatetime: encounter.encounterDatetime
        };
        if (encounter.location && encounter.location.uuid) {
            prevEncounter.location = encounter.location.uuid;
        }
        if (encounter.patient && encounter.patient.uuid) {
            prevEncounter.patient = encounter.patient.uuid;
        }
        if (encounter.form && encounter.form.uuid) {
            prevEncounter.form = encounter.form.uuid;
        }
        if (encounter.encounterType && encounter.encounterType.uuid) {
            prevEncounter.encounterType = encounter.encounterType.uuid;
        }
        if (encounter.provider) {
            const provider = encounter.provider;
            prevEncounter.provider = provider.uuid;
        }
        // Deal with obs.
        if (encounter.obs) {
            const processedObs = this._transformObs(encounter.obs);
            // add in individual processed obs to prevEncounter
            _.extend(prevEncounter, processedObs);
        }
        return prevEncounter;
    }
    _transformObs(obs) {
        if (!obs) {
            return null;
        }
        const obsRep = {};
        if (_.isArray(obs)) {
            _.each(obs, (singleObs) => {
                this._augumentObs(obsRep, this._transformObs(singleObs));
            });
            return obsRep;
        }
        else if (obs.groupMembers) {
            const group = {};
            _.each(obs.groupMembers, (member) => {
                this._augumentObs(group, this._transformObs(member));
            });
            // Handle already existing data
            if (obsRep[obs.concept.uuid] && _.isArray(obsRep[obs.concept.uuid])) {
                obsRep[obs.concept.uuid].push(group);
            }
            else {
                obsRep[obs.concept.uuid] = [group];
            }
            return obsRep;
        }
        else {
            if (obs.value instanceof Object) {
                obsRep[obs.concept.uuid] = obs.value.uuid;
            }
            else {
                obsRep[obs.concept.uuid] = obs.value;
            }
            return obsRep;
        }
    }
    _augumentObs(existing, toAdd) {
        for (const key in toAdd) {
            if (_.has(existing, key)) {
                // check if not an array yet
                if (!_.isArray(existing[key])) {
                    const temp = existing[key];
                    existing[key] = [temp];
                }
                // Check whether the incoming is array (for group members)
                if (_.isArray(toAdd[key])) {
                    Array.prototype.push.apply(existing[key], toAdd[key]);
                }
                else {
                    existing[key].push(toAdd[key]);
                }
            }
            else {
                existing[key] = toAdd[key];
            }
        }
        return existing;
    }
}
HistoricalEncounterDataService.decorators = [
    { type: Injectable },
];
HistoricalEncounterDataService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yaWNhbC1lbmNvdW50ZXItZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9zZXJ2aWNlcy9oaXN0b3JpY2FsLWVuY291bnRlci1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUVsQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFHdkIsTUFBTTtJQUVKO1FBREEsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFDUCxDQUFDO0lBRWhCLGtCQUFrQixDQUFDLElBQVksRUFBRSxVQUFlO1FBQzlDLE1BQU0sUUFBUSxHQUFRO1lBQ3BCLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLENBQUMsR0FBVyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQU8sRUFBRTtnQkFDeEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFDRCxhQUFhLEVBQUUsR0FBRyxFQUFFO2dCQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN2QixDQUFDO1lBQ0QsZUFBZSxF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QUFHLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBbkxGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaXN0b3JpY2FsRW5jb3VudGVyRGF0YVNlcnZpY2Uge1xuICBkYXRhU291cmNlczogYW55ID0ge307XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICByZWdpc3RlckVuY291bnRlcnMobmFtZTogc3RyaW5nLCBlbmNvdW50ZXJzOiBhbnkpIHtcbiAgICBjb25zdCBlbmNTdG9yZTogYW55ID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBnZXRWYWx1ZTogKGtleTogc3RyaW5nLCBpbmRleCA9IDApOiBhbnkgPT4ge1xuICAgICAgICBjb25zdCBwYXRoQXJyYXkgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKHBhdGhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rmlyc3RWYWx1ZShwYXRoQXJyYXksIGVuY1N0b3JlLmRhdGFbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5jU3RvcmUuZGF0YVtpbmRleF1ba2V5XTtcbiAgICAgIH0sXG4gICAgICBnZXRBbGxPYmplY3RzOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbmNTdG9yZS5kYXRhO1xuICAgICAgfSxcbiAgICAgIGdldFNpbmdsZU9iamVjdDogKGluZGV4ID0gMCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5jU3RvcmUuZGF0YVtpbmRleF07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChfLmlzQXJyYXkoZW5jb3VudGVycykpIHtcbiAgICAgIGNvbnN0IGdyb3VwOiBBcnJheTxhbnk+ID0gW107XG4gICAgICBfLmVhY2goZW5jb3VudGVycywgKGVuY291bnRlcikgPT4ge1xuICAgICAgICBncm91cC5wdXNoKHRoaXMuX3RyYW5zZm9ybUVuY291bnRlcihlbmNvdW50ZXIpKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTb3J0IHRoZW0gaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyXG4gICAgICBlbmNTdG9yZS5kYXRhID0gXy5zb3J0QnkoZ3JvdXAsICdlbmNvdW50ZXJEYXRldGltZScpLnJldmVyc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzdW1lIGEgc2luZ2xlIG9wZW5tcnMgcmVzdCBlbmNvdW50ZXIgb2JqZWN0LlxuICAgICAgZW5jU3RvcmUuZGF0YS5wdXNoKHRoaXMuX3RyYW5zZm9ybUVuY291bnRlcihlbmNvdW50ZXJzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5wdXRPYmplY3QobmFtZSwgZW5jU3RvcmUpO1xuICB9XG5cbiAgcHV0T2JqZWN0KG5hbWUsIG9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVNvdXJjZXNbbmFtZV0gPSBvYmplY3Q7XG4gIH1cblxuICBnZXRPYmplY3QobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlc1tuYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0Rmlyc3RWYWx1ZShwYXRoOiBBcnJheTxzdHJpbmc+LCBvYmplY3Q6IGFueSk6IGFueSB7XG4gICAgY29uc3QgYW5zd2VycyA9IFtdO1xuXG4gICAgdGhpcy5nZXRBbGxWYWx1ZXMocGF0aCwgb2JqZWN0LCBhbnN3ZXJzKTtcblxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBhbnN3ZXJzWzBdLFxuICAgICAgICB2YWx1ZURhdGU6IG1vbWVudChvYmplY3QuZW5jb3VudGVyRGF0ZXRpbWUpLmZvcm1hdCgnbGwnKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxWYWx1ZXMocGF0aCwgb2JqZWN0LCBhbnN3ZXJzKSB7XG4gICAgaWYgKF8uaXNOaWwob2JqZWN0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICBpZiAoIV8uaXNOaWwob2JqZWN0W3BhdGhbMF1dKSkge1xuICAgICAgICBhbnN3ZXJzLnB1c2gob2JqZWN0W3BhdGhbMF1dKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdwYXRoID0gcGF0aC5zcGxpY2UoMSk7XG4gICAgY29uc3Qga2V5ID0gcGF0aFswXTtcblxuICAgIGlmIChfLmlzQXJyYXkob2JqZWN0W2tleV0pICYmIG9iamVjdFtrZXldLmxlbmd0aCA+IDApIHtcbiAgICAgIF8uZWFjaChvYmplY3Rba2V5XSwgKGNoaWxkT2JqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0QWxsVmFsdWVzKG5ld3BhdGguc2xpY2UoMCksIGNoaWxkT2JqZWN0LCBhbnN3ZXJzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldEFsbFZhbHVlcyhuZXdwYXRoLnNsaWNlKDApLCBvYmplY3Rba2V5XSwgYW5zd2Vycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtRW5jb3VudGVyKGVuY291bnRlcjogYW55KSB7XG4gICAgaWYgKF8uaXNOaWwoZW5jb3VudGVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUcmFuc2Zvcm0gZW5jb3VudGVyIExldmVsIGRldGFpbHMgdG8ga2V5IHZhbHVlIHBhaXJzLlxuICAgIGNvbnN0IHByZXZFbmNvdW50ZXI6IGFueSA9IHtcbiAgICAgIGVuY291bnRlckRhdGV0aW1lOiBlbmNvdW50ZXIuZW5jb3VudGVyRGF0ZXRpbWVcbiAgICB9O1xuXG4gICAgaWYgKGVuY291bnRlci5sb2NhdGlvbiAmJiBlbmNvdW50ZXIubG9jYXRpb24udXVpZCkge1xuICAgICAgcHJldkVuY291bnRlci5sb2NhdGlvbiA9IGVuY291bnRlci5sb2NhdGlvbi51dWlkO1xuICAgIH1cblxuICAgIGlmIChlbmNvdW50ZXIucGF0aWVudCAmJiBlbmNvdW50ZXIucGF0aWVudC51dWlkKSB7XG4gICAgICBwcmV2RW5jb3VudGVyLnBhdGllbnQgPSBlbmNvdW50ZXIucGF0aWVudC51dWlkO1xuICAgIH1cblxuICAgIGlmIChlbmNvdW50ZXIuZm9ybSAmJiBlbmNvdW50ZXIuZm9ybS51dWlkKSB7XG4gICAgICBwcmV2RW5jb3VudGVyLmZvcm0gPSBlbmNvdW50ZXIuZm9ybS51dWlkO1xuICAgIH1cblxuICAgIGlmIChlbmNvdW50ZXIuZW5jb3VudGVyVHlwZSAmJiBlbmNvdW50ZXIuZW5jb3VudGVyVHlwZS51dWlkKSB7XG4gICAgICBwcmV2RW5jb3VudGVyLmVuY291bnRlclR5cGUgPSBlbmNvdW50ZXIuZW5jb3VudGVyVHlwZS51dWlkO1xuICAgIH1cblxuICAgIGlmIChlbmNvdW50ZXIucHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gZW5jb3VudGVyLnByb3ZpZGVyO1xuICAgICAgcHJldkVuY291bnRlci5wcm92aWRlciA9IHByb3ZpZGVyLnV1aWQ7XG4gICAgfVxuXG4gICAgLy8gRGVhbCB3aXRoIG9icy5cbiAgICBpZiAoZW5jb3VudGVyLm9icykge1xuICAgICAgY29uc3QgcHJvY2Vzc2VkT2JzOiBhbnkgPSB0aGlzLl90cmFuc2Zvcm1PYnMoZW5jb3VudGVyLm9icyk7XG5cbiAgICAgIC8vIGFkZCBpbiBpbmRpdmlkdWFsIHByb2Nlc3NlZCBvYnMgdG8gcHJldkVuY291bnRlclxuICAgICAgXy5leHRlbmQocHJldkVuY291bnRlciwgcHJvY2Vzc2VkT2JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldkVuY291bnRlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zZm9ybU9icyhvYnM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFvYnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic1JlcDogYW55ID0ge307XG4gICAgaWYgKF8uaXNBcnJheShvYnMpKSB7XG4gICAgICBfLmVhY2gob2JzLCAoc2luZ2xlT2JzKSA9PiB7XG4gICAgICAgIHRoaXMuX2F1Z3VtZW50T2JzKG9ic1JlcCwgdGhpcy5fdHJhbnNmb3JtT2JzKHNpbmdsZU9icykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb2JzUmVwO1xuICAgIH0gZWxzZSBpZiAob2JzLmdyb3VwTWVtYmVycykge1xuICAgICAgY29uc3QgZ3JvdXA6IGFueSA9IHt9O1xuICAgICAgXy5lYWNoKG9icy5ncm91cE1lbWJlcnMsIChtZW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fYXVndW1lbnRPYnMoZ3JvdXAsIHRoaXMuX3RyYW5zZm9ybU9icyhtZW1iZXIpKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgYWxyZWFkeSBleGlzdGluZyBkYXRhXG4gICAgICBpZiAob2JzUmVwW29icy5jb25jZXB0LnV1aWRdICYmIF8uaXNBcnJheShvYnNSZXBbb2JzLmNvbmNlcHQudXVpZF0pKSB7XG4gICAgICAgIG9ic1JlcFtvYnMuY29uY2VwdC51dWlkXS5wdXNoKGdyb3VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic1JlcFtvYnMuY29uY2VwdC51dWlkXSA9IFtncm91cF07XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JzUmVwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob2JzLnZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIG9ic1JlcFtvYnMuY29uY2VwdC51dWlkXSA9IG9icy52YWx1ZS51dWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzUmVwW29icy5jb25jZXB0LnV1aWRdID0gb2JzLnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ic1JlcDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdWd1bWVudE9icyhleGlzdGluZzogYW55LCB0b0FkZDogYW55KTogYW55IHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b0FkZCkge1xuICAgICAgaWYgKF8uaGFzKGV4aXN0aW5nLCBrZXkpKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIG5vdCBhbiBhcnJheSB5ZXRcbiAgICAgICAgaWYgKCFfLmlzQXJyYXkoZXhpc3Rpbmdba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gZXhpc3Rpbmdba2V5XTtcbiAgICAgICAgICBleGlzdGluZ1trZXldID0gW3RlbXBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgaW5jb21pbmcgaXMgYXJyYXkgKGZvciBncm91cCBtZW1iZXJzKVxuICAgICAgICBpZiAoXy5pc0FycmF5KHRvQWRkW2tleV0pKSB7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZXhpc3Rpbmdba2V5XSwgdG9BZGRba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhpc3Rpbmdba2V5XS5wdXNoKHRvQWRkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGlzdGluZ1trZXldID0gdG9BZGRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4aXN0aW5nO1xuICB9XG59XG4iXX0=